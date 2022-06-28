export const LOGIN = '[Authentication] Login';
export const LOGOUT = '[Authentication] Logout';

export const loginDispatch = () => ({
    type: LOGIN
});

export const logoutDispatch = () => ({
    type: LOGOUT
});
