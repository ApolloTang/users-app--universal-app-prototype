import _ from 'lodash';

/*

┌────────────────────┐            ┌────────────────────┐         ┌────────────────────┐           ┌────────────────────┐
│                    │     ┌─────▶│Dashboard_landscape │◀───────▶│ Dashboard_portrait │◀────┐     │                    │
│ ┌────────────────┐ │     │      └────────────────────┘         └────────────────────┘     │     │ ┌────────────────┐ │
│ │Details/WebView │ │     │                                                                │     │ │Details/WebView │ │
│ └────────────────┘ │     │                                                                │     │ └────────────────┘ │
│                    │     │                                                                │     │                    │
│     ┌─────────┐    │     │      ┌────────────────────┐         ┌────────────────────┐     │     │   ┌───────────┐    │
│     │ Drawer  │────┼─────┼─────▶│Collection_landscape│◀───────▶│Collection_portrait │◀────┼─────┼───│   Tabs    │    │
│     └─────────┘    │     │      └────────────────────┘         └────────────────────┘     │     │   └───────────┘    │
│                    │     │                                                                │     │                    │
│    ┌───────────┐   │     │                                                                │     │   ┌───────────┐    │
│    │   Login   │   │     │                                                                │     │   │   Login   │    │
│    └───────────┘   │     │      ┌────────────────────┐         ┌────────────────────┐     │     │   └───────────┘    │
│                    │     └─────▶│ Setting_landscape  │◀───────▶│  Setting_portrait  │◀────┘     │                    │
└────────────────────┘            └────────────────────┘         └────────────────────┘           └────────────────────┘
        Stack                                                                                              Stack

*/

const map = {
  Dashboard_portrait    : { stack: 1, type: 'Tabs', index: 0 },
  Dashboard_landscape   : { stack: 1, type: 'Drawer', index: 0 },

  Collections_portrait  : { stack: 1, type: 'Tabs', index: 1 },
  Collections_landscape : { stack: 1, type: 'Drawer', index: 1 },

  Qmlist_portrait       : { stack: 1, type: 'Tabs', index: 2 },
  Qmlist_landscape      : { stack: 1, type: 'Drawer', index: 2 },

  Settings_portrait     : { stack: 1, type: 'Tabs', index: 3 },
  Settings_landscape    : { stack: 1, type: 'Drawer', index: 3 },

  CollectionsDetails    : { stack: 2, type: undefined, index: undefined },
  QmlistDetails         : { stack: 2, type: undefined, index: undefined },
};

const isStackMatch = (_name, _StackIndex) => {
  const o = _.get(map, `${_name}.stack`, void 0) === _StackIndex;
  return o;
};

const isTypeMatch = (_name, _type) => {
  const o = _.get(map, `${_name}.type`, void 0) === _type;
  return o;
};

const isIndexMatch = (_name, _index) => {
  const o = _.get(map, `${_name}.index`, void 0);
  // if the tab value is irrelevant, i.e. for tab values, then we ignore it
  return (o === undefined) || o === _index;
};

const isRouteMatch = (name, nav, note = '') => {
  const stackIndex = _.get(nav, `index`, void 0);
  const drawerType = _.get(nav, `routes[1].routeName`, '');
  const screenIndex = (drawerType === 'Tabs') ? _.get(nav, `routes[1].index`, void 0) : _.get(nav, `routes[1].routes[0].index`, void 0);

  const matchStack = isStackMatch(name, stackIndex);
  const matchType = isTypeMatch(name, drawerType);
  const matchIndex = isIndexMatch(name, screenIndex);

  const match = matchStack && matchType && matchIndex;

  // reactivate for debugging
  // if (__DEV__) console.log(`[isRouteMatch] ${name}:`, match, stackIndex, drawerType, screenIndex, `${note}`);
  return match;
};

// const isRouteTabMatch = function (name, nav, note = '') {
//   const stackIndex = _.get(nav, `index`, void 0);
//   const drawerIndex = _.get(nav, `routes[1].routes[0].index`, void 0);
//   const tabIndex = _.get(nav, `routes[1].routes.routes[0].index`, void 0);

//   const matchStack = isStackMatch(name, stackIndex);
//   const matchDrawer = isTypeMatch(name, drawerIndex);
//   const matchTab = isIndexMatch(name, tabIndex);
//   const match = matchStack && matchDrawer && matchTab;

//   if (__DEV__) console.log(`[RouteTabMatch] ${name}:`, match, stackIndex, drawerIndex, tabIndex, `${note}`);
//   return match;
// };

// const isRouteDrawerMatch = function (name, nav, note = '') {
//   const stackIndex = _.get(nav, `index`, void 0);
//   const drawerIndex = _.get(nav, `routes[1].routes[0].index`, void 0);
//   const tabIndex = _.get(nav, `routes[1].routes[0].routes[0].index`, void 0);

//   const matchStack = isStackMatch(name, stackIndex);
//   const matchDrawer = isTypeMatch(name, drawerIndex);
//   const matchTab = isIndexMatch(name, tabIndex);
//   const match = matchStack && matchDrawer;

//   if (__DEV__) console.log(`[RouteDrawerMatch] ${name}:`, match, stackIndex, drawerIndex, tabIndex, `${note}`);
//   return match;
// };

export default isRouteMatch;
// export { isRouteTabMatch, isRouteDrawerMatch };
