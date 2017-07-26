import React from 'react';

import {
  Provider,
} from 'react-redux';

import store from './store';
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'

import {
  View,
  Text
} from 'react-native';

// import Spinner from 'postman_sync/app/components/widget/spinner/';
import ConnectedNavigator from './connected-navigator';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store, // see https://github.com/reactjs/react-redux/issues/359
      rehydrated: false
    }
  }
  componentWillMount(){
    const isNewVersion = false; //@TODO need to read from build config
    if (isNewVersion) {
      const p = new Promise( (rs)=>{
        persistStore(store, {storage: AsyncStorage}, () => {
          if (__DEV__) console.log('@@@@@@ done purge'); // eslint-disable-line no-console
          rs(); // done purging
        }).purge();
      }).then( ()=> {
        persistStore( store, { storage: AsyncStorage, whitelist: ['sessions', 'nav'] }, () => {
          if (__DEV__) console.log('@@@@@@ new rehydration'); // eslint-disable-line no-console
          this.setState({ rehydrated: true });
        });
      })
    }

    if (!isNewVersion) {
      persistStore(
        store, { storage: AsyncStorage, whitelist: ['sessions', 'nav'] }, () => {
          this.setState({ rehydrated: true })
      });
    }
  }
  componentDidMount() {

  }
  render() {


    // if( !this.state.rehydrated ){
    //   return <Spinner size="large" />;
    // }
    return (
      <Provider store={this.state.store} >
        <ConnectedNavigator/>
      </Provider>
    );

    // return (
    //   <Provider store={this.state.store} >
    //     <View><Text>hello</Text></View>
    //   </Provider>
    // );
  }
};

export default App;


