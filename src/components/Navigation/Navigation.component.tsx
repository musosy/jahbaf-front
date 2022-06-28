import { useEffect, useState } from 'react';
import { NavigationDesktop } from './subComponents/NavigationDesktop';
import './Navigation.style.scss';

export type Theme = 'light' | 'dark';

export const Navigation = () => {
    const [currentTheme, switchTheme] = useState<Theme>('dark');
    useEffect(() => {
        const userTheme: Theme | null = localStorage.getItem('jahbaf-theme') as Theme | null;
        if (!userTheme) {
            localStorage.setItem('jahbaf-theme', 'dark');
            document.documentElement.classList.add('theme-dark');
        } else {
            document.documentElement.classList.add(`theme-${userTheme}`);
            switchTheme(userTheme);
        }
    }, []);

    const onSwitchTheme = (theme: string) => {
        switchTheme(theme as Theme);
        localStorage.setItem('jahbaf-theme', theme);
        document.documentElement.classList.remove(`theme-${theme === 'light' ? 'dark' : 'light'}`);
        document.documentElement.classList.add(`theme-${theme}`);
    };

    return (
        <div>
            <NavigationDesktop onSwitchTheme={onSwitchTheme} currentTheme={currentTheme}/>
        </div>
    );
};
