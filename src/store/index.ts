import { Action, combineReducers, createStore } from 'redux';
import { notificationReducer, NotificationState } from './notification';

export type StoreAction = Action & {
    payload?: any
};

export type StoreState = {
    notification: NotificationState
}

export const store = createStore(combineReducers({
    notification: notificationReducer
}));
