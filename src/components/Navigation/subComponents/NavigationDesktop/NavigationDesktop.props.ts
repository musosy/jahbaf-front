import { Theme } from 'components/Navigation';

export interface NavigationDesktopProps {
    /** Action to trigger when theme is updated */
    onSwitchTheme: (theme: string) => void;

    /** Current selected theme */
    currentTheme: Theme
}
