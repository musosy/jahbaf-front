import { StoreAction } from 'store';
import { LOGIN, LOGOUT } from './authentication.action';

export interface AuthenticationState {
    isLoggedIn: boolean
};

const initialState: AuthenticationState = {
    isLoggedIn: false
};

export const authenticationReducer = (state = initialState, action: StoreAction): AuthenticationState => {
    switch (action.type) {
    case LOGIN:
        return {
            ...state,
            isLoggedIn: true
        };
    case LOGOUT:
        return {
            ...state,
            isLoggedIn: false
        };
    default:
        return state;
    }
};
