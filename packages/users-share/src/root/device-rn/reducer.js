import _ from 'lodash';
import c from 'root/action-names';

const initialState = {
  height: void 0,
  width: void 0,
  orientation: void 0,
  device: void 0,
  online: false,
}

const reducer_device = (state = { ...initialState }, action) => {
  switch (action.type) {
    case c['@@device__initialize']: {
      const payload = action.payload;
      const state_prev = state;
      const state_next = {
        ...state_prev,
        ...payload,
      };
      return state_next;
    }
    case c[`@@device__orientation_change`]: {
      const payload = action.payload;
      const state_prev = state;
      const state_next = {
        ...state_prev,
        ...payload,
      };
      return state_next;
    }
    case c['@@device__network_change']: {
      const payload = action.payload;
      const state_prev = state;
      const state_next = {
        ...state_prev,
        ...payload,
      };
      return state_next;
    }
    default: {
      return state;
    }
  }
};

export default reducer_device;
