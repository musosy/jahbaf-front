import { Loader } from 'components';
import { useGetSelf } from 'hooks/useGetSelf.hook';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Routes } from 'routes/Routes.enum';

const WithoutAuthGuard = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        const asyncbootstrap = async () => {
            const { login, confirmed } = await useGetSelf();
            setIsLoggedIn(login);
            setIsLoading(confirmed);
        };
        asyncbootstrap();
        if (!isLoading) isLoggedIn && history.push(Routes.PROJECTS);
    }, [isLoading]);
    return (
        <>
            {isLoading ? <Loader /> : <>{children}</>}
        </>
    );
};

export default WithoutAuthGuard;
