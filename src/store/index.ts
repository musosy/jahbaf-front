import { Action, combineReducers, createStore } from 'redux';
import { notificationReducer, NotificationState } from './notification';
import { authenticationReducer, AuthenticationState } from './authentication';

export type StoreAction = Action & {
    payload?: any
};

export type StoreState = {
    notification: NotificationState,
    authentication: AuthenticationState
}

export const store = createStore(combineReducers({
    notification: notificationReducer,
    authentication: authenticationReducer
}));
