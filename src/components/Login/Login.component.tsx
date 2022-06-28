import { Button, Popup, Card } from 'components';
import Form from 'components/Form/Form.component';
import InputForm from '../Form/InputForm/InputForm.component';
import { useState } from 'react';
import waves from 'assets/images/waves.svg';
import beaver from 'assets/images/beaver.png';
import { ILoginProps } from './Login.props';
import './Login.style.scss';
import { useHistory } from 'react-router';
import { Routes } from 'routes/Routes.enum';
import { onInputChange } from 'helpers/auth.helpers';
import { useSetHeaders } from 'hooks/useSetHeaders.hook';
import { login } from 'services';
import { useDispatch } from 'react-redux';
import { loginDispatch } from 'store/authentication';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [userInput, setUserInput] = useState<ILoginProps>({
        email: '',
        password: '',
        /* eslint no-unused-vars: 0 */
        shouldRemember: true
    });
    const { email, password } = userInput;

    const [shouldDisplayPopupConfirm, setShouldDisplayPopupConfirm] = useState(false);

    const onLoginSubmit = async (): Promise<void> => {
        const { email, password, shouldRemember } = userInput;
        if (email !== '' && password !== '') {
            const result = await login(email, password);
            if (result.status === 200) {
                dispatch(loginDispatch());
                useSetHeaders(result.access_token, 'jahbaf-token');
                history.push(Routes.HOME);
            } else {
                if (
                    result.status === 403 &&
                    result.message === 'User is not activated'
                ) setShouldDisplayPopupConfirm(true);
                console.log(result.message);
            }
        }
    };
    const onPopupClose = () => setShouldDisplayPopupConfirm(false);
    return (
        <>
            <div className='login'>
                <div className='login__card'>
                    <img className='beaver-logo' src={beaver} alt='' />
                    <Form>
                        <InputForm
                            name='email'
                            value={email}
                            placeholder='Email'
                            isRequired
                            onChange={(e) => onInputChange(e, setUserInput, userInput)}
                            type='email'
                        />
                        <InputForm
                            name='password'
                            value={password}
                            placeholder='Mot de passe'
                            isRequired
                            type='password'
                            onChange={(e) => onInputChange(e, setUserInput, userInput)}
                        />
                        <Button
                            width='100%'
                            content='Login'
                            onClickAction={onLoginSubmit}
                            submit
                        />
                        <div className='link-button__wrapper'>
                            <a className='link-button' onClick={() => history.push(Routes.REGISTER)}>Pas encore de compte?</a>
                            <a className='link-button' onClick={() => history.push(Routes.FORGOT_PASSWORD)}>Mot de passe oublié?</a>
                        </div>
                    </Form>
                </div>
            </div>
            <img className='login-page--waves' src={waves} alt='Wavy background' />
            {shouldDisplayPopupConfirm &&
            <Popup motion='enter-left'>
                <Card
                    title='Confirmation du compte'
                    isClosable={true}
                    onCloseAction={onPopupClose}
                >
                    <p>
                        Un email de validation vous a déjà été envoyé à l&apos;adresse {email}. Veuillez cliquer sur le lien transmis pour valider votre compte.
                    </p>
                </Card>
            </Popup>}
        </>
    );
};

export default Login;
