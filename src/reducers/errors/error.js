import { RECEIVE_CURRENT_ADMIN } from "../../actions/session";
import { CLEAR_ERRORS, RECEIVE_ERRORS } from "../../actions/error";
export default (state = "", { message, type }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_ERRORS:
      return message;
    case RECEIVE_CURRENT_ADMIN:
    case CLEAR_ERRORS:
      return "";
    default:
      return state;
  }
};