export const DISPLAY_NOTIF = '[Notification] Display notification';
export const HIDE_NOTIF = '[Notification] Hide notification';

export type NotificationTypes = 'error' | 'info' | 'success';

export const displayNotification = (type: NotificationTypes, message: string) => ({
    type: DISPLAY_NOTIF,
    payload: { type, message }
});

export const hideNotification = () => ({
    type: HIDE_NOTIF
});
