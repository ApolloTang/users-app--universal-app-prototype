import {
  NavigationActions,
} from 'react-navigation';

const Action_navigateToRoute = (routeName, params) => {
  if (__DEV__) console.log('xxxxxx Action_navigateToRoute');
  return NavigationActions.navigate({ routeName, params });
};

// there may be the potential to squeeze out a few ms of speed here - hardcode the full resets using back actions (if the stack is small enough)

const Action_navigateToTab = (arg) => {
  if (__DEV__) console.log('xxxxxx Action_navigateToTab');
  return NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login' }),
    ],
  });
};

const Action_navigateToDrawer = (arg) => {
  if (__DEV__) console.log('xxxxxx Action_navigateToDrawer');
  return NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login' }),
    ],
  });
};

const Action_navigateToRouteReset = routeName => NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName }),
  ],
});

const Action_goBack = (key) => {
  return NavigationActions.back({
    key,
  });
};

export {
  Action_navigateToRoute,
  Action_navigateToDrawer,
  Action_navigateToTab,
  Action_navigateToRouteReset,
  Action_goBack,
};
