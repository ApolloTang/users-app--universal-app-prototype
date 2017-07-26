import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Collection_portrait } from 'postman_sync/app/components/container/collections/collectionsOrientation';
import { Dashboard_portrait } from 'postman_sync/app/components/container/dashboard/dashboardOrientation';
import { Settings_portrait } from 'postman_sync/app/components/container/settings/settingsOrientation';
import { Qmlist_portrait } from 'postman_sync/app/components/container/qmlist/qmlistOrientation';

const color = Platform.OS === 'android' ? '#fff' : '#999';

const Nav_tab = TabNavigator({
  Dashboard_portrait: {
    screen: Dashboard_portrait,
    navigationOptions: () => ({
      title: 'Dashboard',
      tabBarIcon: () => {
        return <Icon name="dashboard" size={30} style={{ color, width: 28 }} />;
      },
    }),
  },
  Collection_portrait: {
    screen: Collection_portrait,
    navigationOptions: () => ({
      title: 'Collections',
      tabBarIcon: () => {
        return <Icon name="view-list" size={30} style={{ color, width: 32 }} />;
      },
    }),
  },
  Qmlist_portrait: {
    screen: Qmlist_portrait,
    navigationOptions: () => ({
      title: 'QmLists',
      tabBarIcon: () => {
        return <Icon name="home" size={30} style={{ color, width: 30 }} />;
      },
    }),
  },
  Settings_portrait: {
    screen: Settings_portrait,
    navigationOptions: () => ({
      title: 'Settings',
      tabBarIcon: () => {
        return <Icon name="settings" size={30} style={{ color, width: 30 }} />;
      },
    }),
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
  },
});

export default Nav_tab;
