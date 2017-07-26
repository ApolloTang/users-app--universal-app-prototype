import React from 'react';
import {
  DrawerNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Drawer from 'postman_sync/app/components/widget/drawer/';

import { Collection_landscape } from 'postman_sync/app/components/container/collections/collectionsOrientation';
import { Dashboard_landscape } from 'postman_sync/app/components/container/dashboard/dashboardOrientation';
import { Settings_landscape } from 'postman_sync/app/components/container/settings/settingsOrientation';
import { Qmlist_landscape } from 'postman_sync/app/components/container/qmlist/qmlistOrientation';

const Nav_drawer = DrawerNavigator({
  Dashboard_landscape: {
    screen: Dashboard_landscape,
    navigationOptions: () => ({
      title: 'Dashboard',
      drawerIcon: () => {
        return <Icon name="dashboard" size={23} />;
      },
    }),
  },
  Collection_landscape: {
    screen: Collection_landscape,
    navigationOptions: () => ({
      title: 'Collections',
      drawerIcon: () => {
        return <Icon name="view-list" size={27} />;
      },
    }),
  },
  Qmlist_landscape: {
    screen: Qmlist_landscape,
    navigationOptions: () => ({
      title: 'QmLists',
      drawerIcon: () => {
        return <Icon name="home" size={25} />;
      },
    }),
  },
  Settings_landscape: {
    screen: Settings_landscape,
    navigationOptions: () => ({
      title: 'Settings',
      drawerIcon: () => {
        return <Icon name="settings" size={25} />;
      },
    }),
  },
}, {
  // https://github.com/react-community/react-navigation/pull/793
  // https://github.com/react-community/react-navigation/issues/390
  // for now, making Drawer a connected component and disabling drawer on portrait
  // no longer an issue
  contentComponent: Drawer,
  drawerWidth: 220,
});

export default Nav_drawer;
