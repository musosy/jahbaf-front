import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.style.scss';

export const Loader = () => (
    <BallTriangle color="grey" height={200} width={200} />
);
