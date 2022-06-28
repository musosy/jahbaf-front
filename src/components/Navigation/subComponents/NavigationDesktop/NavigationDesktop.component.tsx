import { useState, useEffect } from "react";
import Logout from 'components/Logout/Logout.component';
import { Switch } from 'components/Navigation/subComponents/Switch';
import { useGetSelf } from 'hooks/useGetSelf.hook';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from 'routes/Routes.enum';
// import { NavigationDesktopProps } from './NavigationDesktop.props';

import './NavigationDesktop.style.scss';

export const NavigationDesktop = ({ onSwitchTheme, currentTheme }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();
    const { location } = history;
    const isAuth = location.pathname === Routes.LOGIN || location.pathname === Routes.REGISTER;
    useEffect(() => {
        const asyncbootstrap = async () => {
            const result = await useGetSelf();
            setIsLoggedIn(result.isLoggedIn);
        };
        asyncbootstrap();
    }, []);
    return (
        <div className="navigation-desktop">
            <h1>JAHBAF</h1>
            <nav>
                {isLoggedIn
                    ? <Link to={Routes.PROJECTS}>Projets</Link>
                    : <div>
                        {!isAuth && (
                            <>
                                <Link to={Routes.LOGIN}>Se connecter</Link>
                                {' - '}
                                <Link to={Routes.REGISTER}>S&apos;inscrire</Link>
                            </>
                        )}
                    </div>}
            </nav>
            <Switch onSwitch={onSwitchTheme} currentValue={currentTheme} />
            {isLoggedIn && <Logout />}
        </div>
    );
};
