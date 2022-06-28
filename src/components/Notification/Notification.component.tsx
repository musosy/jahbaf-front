import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'store';
import { BsCheck, BsInfo } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { hideNotification } from 'store/notification';
import './Notification.style.scss';

const NOTIFICATION_DISPLAY_TIME_IN_SECONDS = 5;
const LEAVE_ANIMATION_DURATION_IN_SECONDS = 0.5;

export const Notification = () => {
    const notification = useSelector((state: StoreState) => state.notification);
    const dispatch = useDispatch();
    const [status, setStatus] = useState('enter');

    useEffect(() => {
        setTimeout(() => {
            setStatus('leave');
        }, NOTIFICATION_DISPLAY_TIME_IN_SECONDS * 1000);

        setTimeout(() => {
            dispatch(hideNotification());
        }, (NOTIFICATION_DISPLAY_TIME_IN_SECONDS + LEAVE_ANIMATION_DURATION_IN_SECONDS) * 1000);
    }, []);

    return (
        <div className={'notification notification-' + notification.type + ' notification-' + status}>
            <span>
                { notification.type === 'success' && <BsCheck/>}
                { notification.type === 'error' && <GrFormClose/>}
                { notification.type === 'info' && <BsInfo/>}
            </span>
            { notification.message }
            <div className="notification-timer-container"></div>
        </div>
    );
};
