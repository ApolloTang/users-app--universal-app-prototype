import React from 'react';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import {
  View, Text
} from 'react-native';

// view user collection
const Screen_users = ()=>(
  <View>
    <Text> users </Text>
  </View>
)

// view for user item (edit/delete)
const Screen_user = ()=>(
  <View>
    <Text> user </Text>
  </View>
)

const Navigator_root = StackNavigator({
  Users: {
    screen: Screen_users,
  },
  User: {
    screen: Screen_user,
  }
}, {
  initialRouteName: 'Users',
});

export default Navigator_root;

