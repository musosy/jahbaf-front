import { SwitchProps } from './Switch.props';
import { FiMoon, FiSun } from 'react-icons/fi';

import './Switch.style.scss';

export const Switch = ({ onSwitch, currentValue }: SwitchProps) => (
    <div className="switch" onClick={() => onSwitch(currentValue === 'light' ? 'dark' : 'light')}>
        <FiSun/>
        <div className={currentValue === 'light' ? 'left' : 'right'}></div>
        <FiMoon/>
    </div>
);
