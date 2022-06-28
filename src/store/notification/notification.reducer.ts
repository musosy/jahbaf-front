import { StoreAction } from 'store';
import { DISPLAY_NOTIF, HIDE_NOTIF, NotificationTypes } from '.';

export interface NotificationState {
    isVisible: boolean,
    type: NotificationTypes | null,
    message: string
}

const initialState: NotificationState = {
    isVisible: false,
    type: null,
    message: ''
};

export const notificationReducer = (state = initialState, action: StoreAction): NotificationState => {
    switch (action.type) {
    case DISPLAY_NOTIF:
        return {
            ...state,
            isVisible: true,
            type: action.payload.type,
            message: action.payload.message
        };
    case HIDE_NOTIF:
        return {
            ...state,
            isVisible: false,
            type: null,
            message: ''
        };
    default:
        return state;
    }
};
