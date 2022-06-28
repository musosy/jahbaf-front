import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { confirmAccount } from 'services/auth.service';
import { Routes } from 'routes/Routes.enum';
import { Loader } from 'components/Loader';
import { useSetHeaders } from 'hooks';
import { useDispatch } from 'react-redux';
import { loginDispatch } from 'store/authentication';

const ConfirmAccount = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { token } = useParams<{token: string}>();
    useEffect(() => {
        const asyncbootstrap = async () => {
            const result = await confirmAccount(token);
            if (result.status === 200) {
                dispatch(loginDispatch());
                useSetHeaders(result.access_token, 'jahbaf-token');
                history.push(Routes.HOME);
            }
        };
        asyncbootstrap();
    }, []);
    return (
        <Loader />
    );
};

export default ConfirmAccount;
