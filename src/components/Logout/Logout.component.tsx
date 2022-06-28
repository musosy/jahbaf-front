import { Button } from 'components';
import { onLogout } from 'helpers/auth.helpers';
import { HiLogout } from 'react-icons/hi';
import { useHistory } from 'react-router';
import { Routes } from 'routes/Routes.enum';
import './Logout.style.scss';

const Logout = () => {
    const history = useHistory();
    const onClickLogout = () => {
        onLogout();
        history.push(Routes.LOGIN);
    };
    return (
        <div className='logout-wrapper'>
            <Button onClickAction={onClickLogout } content={<HiLogout />} />
        </div>
    );
};

export default Logout;
