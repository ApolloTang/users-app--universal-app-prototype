import _ from 'lodash';

import React from 'react';
import { func, object, string } from 'prop-types';
import {
  View,
  BackHandler,
  Dimensions,
  NetInfo,
} from 'react-native';

import {
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation';

import { connect } from 'react-redux';

import c from 'users_rn/app/common/action-names';

import appConfig from 'users_rn/app/appConfig';

import RootNavigator from 'users_rn/app/root/navigations/root';

// ==============================
// Connected-navigator's selector
// ==============================
const mapStoreToProps = state => {
  console.log('xxxxxx mapStoreToProps:out ', state)
  const out = {
    nav: state.nav,
    orientation: _.get(state, `device.orientation`, void 0)
  };
  return out;
};

const mapDispatchToProps = dispatch => ({
  dispatch_layoutChange(layout, prevOrientation) {
    // [ README ] [ README ] [ README ] [ README ]
    //
    // Since we use window size as a proxy for camera orientation
    // this approach will fail when the window’s orientation
    // doesn’t match the camera’s. For example, if our app is
    // loaded on an Android or iOS tablet in split-screen it
    // may believe that the device is in portrait orientation
    // when it’s really in landscape.
    //
    // Reference:
    //     https://corbt.com/posts/2016/03/16/detecting-orientation-in-react-native.html
    //
    // [ README ] [ README ] [ README ] [ README ]

    // ADDED checking for orientation changes - only fires actiond when orientation actually changes
    const { width, height } = layout;
    const nextOrientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT';
    if (prevOrientation !== nextOrientation) {
      dispatch({
        type: c[`@@device__orientation_change`],
        payload: {
          width,
          height,
          orientation: nextOrientation,
        },
      });
    }
  },
  dispatch_deviceInit() {
    // uses Dimensions rather than onLayout - as this is run only once at init
    const { width, height } = Dimensions.get('window');
    const orientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT';
    console.log('xxxxxxxxxxxxx orientation' , orientation )
    const device = (width > 900 || height > 900) ? 'TABLET' : 'PHONE';
    NetInfo.fetch().then((reach) => {
      const online = !(reach.toUpperCase() === 'NONE' || reach.toUpperCase() === 'UNKNOWN');
      dispatch({
        type: c[`@@device__initialize`],
        payload: {
          height,
          width,
          orientation,
          device,
          online,
        },
      });
    });
  },
  dispatch_networkChange(reach) {
    const online = !(reach.toUpperCase() === 'NONE' || reach.toUpperCase() === 'UNKNOWN');
    dispatch({
      type: c[`@@device__network_change`],
      payload: {
        online,
      },
    });
  },
  dispatch,
});


@connect(mapStoreToProps, mapDispatchToProps)
class ConnectedNavigator extends React.Component {
  static propTypes = {
    dispatch: func.isRequired,
    dispatch_layoutChange: func.isRequired,
    dispatch_networkChange: func.isRequired,
    dispatch_deviceInit: func.isRequired,
    nav: object.isRequired,
    orientation: string,
  }

  constructor(props) {

    console.log('************* **************')
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
    this.onNetworkChange = this.onNetworkChange.bind(this);
  }

  componentDidMount(prevProps, prevState) {
    console.log('************* component did mount connected-navigator**************')

    this.props.dispatch_deviceInit();
    NetInfo.addEventListener(
      'change',
      this.onNetworkChange,
    );
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    // console.log('componentDidMount: props_rootNavigator: ', this.props_rootNavigator);

    // console.log(Dimensions.get('window'));
    // const layout = Dimensions.get('window')
    // this.props.dispatch_layoutChange(layout);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate: props_rootNavigator: ', this.props_rootNavigator);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    NetInfo.removeEventListener(
      'change',
      this.onNetworkChange,
    );
  }

  onBackPress() {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  }

  onLayout = (event) => {
    // console.log('************* onLayout connected-navigator**************')
    this.props.dispatch_layoutChange(event.nativeEvent.layout, this.props.orientation);
  }

  onNetworkChange(reach) {
    this.props.dispatch_networkChange(reach);
  }

  render() {

    console.log('************* XXXXXX  **************')
    console.log('************* XXXXXX  **************')

    const { dispatch, nav } = this.props;
    return (
      <View
        style={{ flex: 1 }}
        onLayout={this.onLayout}
      >
        <RootNavigator
          screenProps={{ // screenProps is passed down into child component
            appConfig
          }}
          ref={(props_rootNavigator) => {
            // Make properties of rootNavigator available to ConnectedNavigator.
            // We do this because we might want to have access to RootNavigator's properties
            // in ConnectedNavigator.
            this.props_rootNavigator = props_rootNavigator;
          }}
          navigation={
            // When navigation propperty is specifed React
            // Navigation state is now store in reducer, React Navigation
            // will no longer keep track of navigation state (nav)
            addNavigationHelpers({ dispatch, state: nav })
          }
        />
      </View>
    );
  }
}

export default ConnectedNavigator;
