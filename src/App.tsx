import { useSelector } from 'react-redux';
import { Navigation, Notification } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes';
import { StoreState } from 'store';
import './App.scss';

const App = () => {
    const notification = useSelector((state: StoreState) => state.notification);
    return (
        <div>
            { notification.isVisible && <Notification/> }
            <BrowserRouter>
                <Navigation/>
                <Routes/>
            </BrowserRouter>
        </div>
    );
};

export default App;
