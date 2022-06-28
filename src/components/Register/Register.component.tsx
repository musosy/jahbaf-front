import { useEffect, useState } from 'react';
import { Button } from 'components';
import Form from 'components/Form/Form.component';
import InputForm from 'components/Form/InputForm/InputForm.component';
import { IRegisterProps, IRegisterValidationProps } from './Register.props';
import waves from 'assets/images/waves.svg';
import beaver from 'assets/images/beaver.png';
import { emailRegexp, passwordRegexp } from 'helpers/loginValidationPolicy.helpers';
import './Register.style.scss';
import { onInputChange } from 'helpers/auth.helpers';
import { Popup } from 'components/Popup';
import { Card } from 'components/Card';
import { Routes } from 'routes/Routes.enum';
import { useHistory } from 'react-router';

const Register = () => {
    const history = useHistory();
    const [formValidation, setFormValidation] = useState<IRegisterValidationProps>({
        nicknameValidation: '',
        emailValidation: '',
        passwordValidation: '',
        confirmPasswordValidation: ''
    });
    const [shouldDisplayPopupConfirm, setShouldDisplayPopupConfirm] = useState(false);
    const { nicknameValidation, emailValidation, passwordValidation, confirmPasswordValidation } = formValidation;
    const [triggerValidation, setTriggerValidation] = useState(false);
    const [userInput, setUserInput] = useState<IRegisterProps>({
        nickname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { nickname, email, password, confirmPassword } = userInput;

    const isFormValid = () => {
        return nickname.length > 4 && email.match(emailRegexp) && password.match(passwordRegexp) && confirmPassword && (password === confirmPassword);
    }

    useEffect(() => {
        setFormValidation({
            nicknameValidation: nickname.length < 4
                ? 'Votre pseudo doit contenir au moins 4 caractères'
                : '',
            emailValidation: !email.match(emailRegexp)
                ? 'Votre email doit être au format suivant: john@mail.com'
                : '',
            passwordValidation: !password.match(passwordRegexp)
                ? 'Votre mot de passe doit contenir minimum 8 caractères, un symbol, un chiffre et une majuscule'
                : '',
            confirmPasswordValidation: password !== confirmPassword
                ? 'Vos deux mots de passe doivent être identiques'
                : ''
        });
    }, [userInput]);

    function onSignupSubmit (): void {
        if (isFormValid()) {
            // TODO: call the api to register the user
        }
        setTriggerValidation(true);
    }

    function onPopupClose () {
        setShouldDisplayPopupConfirm(false);
        history.push(Routes.LOGIN);
    }

    return (
        <>
            <div className="login">
                <div className="login__card">
                    <img className="beaver-logo" src={beaver} alt="" />
                    <Form className="signup__form">
                        <h1 className='signup__title'>S&apos;inscrire</h1>
                        <InputForm
                            name="nickname"
                            value={nickname}
                            placeholder="nickname"
                            isRequired
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                            type='text'
                        />
                        {triggerValidation && nicknameValidation && <p className="form-error">{nicknameValidation}</p>}
                        <InputForm
                            name="email"
                            value={email}
                            placeholder="Email"
                            isRequired
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                            type='email'
                        />
                        {triggerValidation && emailValidation && <p className="form-error">{emailValidation}</p>}
                        <InputForm
                            name="password"
                            value={password}
                            placeholder="Mot de passe"
                            isRequired
                            type="password"
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                        />
                        {triggerValidation && passwordValidation && <p className="form-error">{passwordValidation}</p>}
                        <InputForm
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirmation de mot de passe"
                            isRequired
                            type="password"
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                        />
                        {triggerValidation && confirmPasswordValidation && <p className="form-error">{confirmPasswordValidation}</p>}
                        <Button
                            width="100%"
                            content="S'inscrire"
                            onClickAction={onSignupSubmit}
                            submit
                        />
                        <div className='link-button__wrapper'>
                            <a className='link-button' onClick={() => history.push(Routes.LOGIN)}>Déjà un compte?</a>
                        </div>
                    </Form>
                </div>
            </div>
            <img className="login-page--waves" src={waves} alt="Wavy background" />
            {shouldDisplayPopupConfirm &&
            <Popup motion="enter-left">
                <Card
                    title="Votre inscription est presque terminée"
                    isClosable={true}
                    onCloseAction={onPopupClose}
                >
                    <p>
                        Afin de vérifier votre compte, nous venons de vous envoyer un e-mail contenant un lien de confirmation. Si vous n&apos;avez rien reçu, merci de vérifier vos spams. Vous pouvez également essayer de vous renvoyer un nouveau lien en cliquant sur le bouton ci-dessous.
                    </p>
                </Card>
            </Popup>}
        </>
    );
};

export default Register;