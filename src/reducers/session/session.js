import {
  RECEIVE_CURRENT_ADMIN,
  LOGOUT_CURRENT_ADMIN
} from "../../actions/session";

const _nullSession = { userId: null, firstname: null, lastname: null };

export default (state = _nullSession, { type, admin }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_ADMIN:
      return admin;
    case LOGOUT_CURRENT_ADMIN:
      return _nullSession;
    default:
      return state;
  }
};