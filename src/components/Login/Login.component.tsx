import { Button } from 'components';
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

const Login = () => {
    const history = useHistory();
    const [userInput, setUserInput] = useState<ILoginProps>({
        email: '',
        password: '',
        /* eslint no-unused-vars: 0 */
        shouldRemember: true
    });
    const { email, password } = userInput;
    const onLoginSubmit = async (): Promise<void> => {
        const { email, password, shouldRemember } = userInput;
        if (email !== "" && password !== "") {
            const result = await login(email, password);
            if (result.status === 200) {
                useSetHeaders(result.access_token, "jahbaf-token");
                history.push(Routes.HOME);
            } else {
                console.log(result.message);
            }
        }
    };
    return (
        <>
            <div className="login">
                <div className="login__card">
                    <img className="beaver-logo" src={beaver} alt="" />
                    <Form>
                        <InputForm
                            name="email"
                            value={email}
                            placeholder="Email"
                            isRequired
                            onChange={(e) => onInputChange(e, setUserInput, userInput)}
                            type='email'
                        />
                        <InputForm
                            name="password"
                            value={password}
                            placeholder="Mot de passe"
                            isRequired
                            type="password"
                            onChange={(e) => onInputChange(e, setUserInput, userInput)}
                        />
                        <Button
                            width="100%"
                            content="Login"
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
            <img className="login-page--waves" src={waves} alt="Wavy background" />
        </>
    );
};

export default Login;
