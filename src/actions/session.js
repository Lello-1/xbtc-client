import * as apiUtil from '../utils/session';
import { receiveErrors } from "./error";

export const RECEIVE_CURRENT_ADMIN = 'RECEIVE_CURRENT_ADMIN';
export const LOGOUT_CURRENT_ADMIN = 'LOGOUT_CURRENT_ADMIN';

const receiveCurrentAdmin = admin => ({
  type: RECEIVE_CURRENT_ADMIN,
  admin
});
const logoutCurrentAdmin = () => ({
  type: LOGOUT_CURRENT_ADMIN
});

export const login = admin => async dispatch => {
  const response = await apiUtil.login(admin);
  const data = await response.json();
if (response.ok) {
    return dispatch(receiveCurrentAdmin(data));
  }
  return dispatch(receiveErrors(data));
};
export const signup = admin => async dispatch => {
  console.log('HERE: ', admin);
  const response = await apiUtil.signup(admin);
  const data = await response.json();
  
  if (response.ok) {
    return dispatch(receiveCurrentAdmin(data));
  }
  return dispatch(receiveErrors(data));
};
export const logout = () => async dispatch => {
  const response = await apiUtil.logout();
  const data = await response.json();
if (response.ok) {
    return dispatch(logoutCurrentAdmin());
  }
  return dispatch(receiveErrors(data));
};