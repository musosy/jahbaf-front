import { Loader } from 'components';
import { useGetSelf } from 'hooks/useGetSelf.hook';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Routes } from 'routes/Routes.enum';

const NeedsAuthGuard = ({ children }: any) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [activated, setActivated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        const asyncbootstrap = async () => {
            const { isLoggedIn, isConfirmed, c } = await useGetSelf();
            setLoggedIn(isLoggedIn);
            setActivated(isConfirmed);
            setIsLoading(c);
        };
        asyncbootstrap();
        if (!isLoading) (!loggedIn || !activated) && history.push(Routes.LOGIN);
    }, [isLoading]);

    return (
        <>
            {isLoading ? <Loader /> : <>{children}</>}
        </>
    );
};

export default NeedsAuthGuard;
