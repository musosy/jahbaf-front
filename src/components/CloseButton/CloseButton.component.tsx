import { MdClose } from 'react-icons/md';
import { CloseButtonProps } from './CloseButton.props';
import './CloseButton.style.scss';

export const CloseButton = ({ onCloseAction }: CloseButtonProps) => (
    <div className="close-button" onClick={onCloseAction}>
        <MdClose/>
        <MdClose/>
    </div>
);