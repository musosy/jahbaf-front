import { Theme } from 'components/Navigation';

export interface SwitchProps {
    /** Action to trigger when switching */
    onSwitch: (value: Theme) => void;

    /** Current selected value */
    currentValue: Theme;
}
