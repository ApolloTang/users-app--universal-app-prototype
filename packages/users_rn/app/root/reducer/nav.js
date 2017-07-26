import RootNavigator from 'users_rn/app/root/navigations/root';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Users'),
);

const nav = function navReducer(state = initialState, action) {
  const state_prev = state;
  const state_next = RootNavigator.router.getStateForAction(action, state_prev);
  if (__DEV__) console.log('kkkkkk: nav state state_prev: ', state_prev);
  if (__DEV__) console.log('kkkkkk: nav state state_next: ', state_next);
  return (state_next || state_prev);
};

export default nav;
