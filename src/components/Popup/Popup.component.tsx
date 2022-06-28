import { PopupProps } from './Popup.props';
import './Popup.style.scss';

export const Popup = ({ children, motion }: PopupProps) => (
    <div className={'popup ' + motion}>
        <div className="popup-content">
            { children }
        </div>
    </div>
);
