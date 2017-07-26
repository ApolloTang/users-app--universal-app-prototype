import React from 'react';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

// import Screen_login from 'postman_sync/app/components/container/login/';
// import Screen_CollectionsDetails from 'postman_sync/app/components/container/collectionsDetails/';
// import Screen_QmlistDetails from 'postman_sync/app/components/container/qmlistDetails/';
// import Screen_WebView from 'postman_sync/app/components/container/webview/';
//
// import Nav_drawer from 'postman_sync/app/root/navigations/nav-drawer';
// import Nav_tab from 'postman_sync/app/root/navigations/nav-tab';

import {
  View, Text
} from 'react-native';

const Screen_login = ()=>(<View>
  <Text> Screen_login xxxxxxxxxxxxxxxxxxxxx </Text>
  <Text> Screen_login xxxxxxxxxxxxxxxxxxxxx </Text>
  <Text> Screen_login xxxxxxxxxxxxxxxxxxxxx </Text>
</View> )

const Navigator_root = StackNavigator({
  Login: {
    screen: Screen_login,
  },
  // Drawer: {
  //   screen: Nav_drawer,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
  // Tabs: {
  //   screen: Nav_tab,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
  // CollectionsDetails: {
  //   screen: Screen_CollectionsDetails,
  //   // navigationOptions: (...args) => {
  //   //   console.log('xxxxx: world: ', args)
  //   //   return {test:testing}
  //   // },
  // },
  // QmlistDetails: {
  //   screen: Screen_QmlistDetails,
  // },
  // WebView: {
  //   screen: Screen_WebView,
  // },
}, {
  initialRouteName: 'Login',
});

export default Navigator_root;

