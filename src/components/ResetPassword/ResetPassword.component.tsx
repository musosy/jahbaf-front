import Form from 'components/Form/Form.component';
import InputForm from 'components/Form/InputForm/InputForm.component';
import beaver from 'assets/images/beaver.png';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { IRegisterProps, IRegisterValidationProps } from 'components/Register/Register.props';
import { resetPassword } from 'services/auth.service';
import { passwordRegexp } from 'helpers/loginValidationPolicy.helpers';
import { onInputChange } from 'helpers/auth.helpers';
import { Button } from 'components/Button';
import { Routes } from 'routes/Routes.enum';
import { useSetHeaders } from 'hooks/useSetHeaders.hook';
import './ResetPassword.style.scss';

const ResetPassword = () => {
    const history = useHistory();
    const [formValidation, setFormValidation] = useState<Omit<IRegisterValidationProps, 'emailValidation' | 'nicknameValidation'>>({
        passwordValidation: '',
        confirmPasswordValidation: ''
    });

    const { passwordValidation, confirmPasswordValidation } = formValidation;
    const [triggerValidation, setTriggerValidation] = useState(false);
    const [userInput, setUserInput] = useState<Omit<IRegisterProps, 'nickname' | 'email'>>({
        password: '',
        confirmPassword: ''
    });
    const { password, confirmPassword } = userInput;

    const { token } = useParams<{ token: string }>();

    const onResetPasswordSubmit = async () => {
        if (password === confirmPassword) {
            const result = await resetPassword(token, password);
            if (result.status === 200) {
                useSetHeaders(result.access_token, 'jahbaf-token');
                history.push(Routes.LOGIN);
            } else {
                console.log(result);
            }
        };
        setTriggerValidation(true);
    };
    useEffect(() => {
        setFormValidation({
            passwordValidation: !password.match(passwordRegexp)
                ? 'Votre mot de passe doit contenir minimum 8 caractères, un symbol, un chiffre et une majuscule'
                : '',
            confirmPasswordValidation: password !== confirmPassword
                ? 'Vos deux mots de passe doivent être identiques'
                : ''
        });
    }, [userInput]);
    return (
        <div className="login">
            <div className="login__card">
                <img className="beaver-logo" src={beaver} alt="" />
                <Form className="signup__form">
                    <h1 className='signup__title'>Nouveau mot de passe</h1>
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
                        content="ENVOYER"
                        onClickAction={onResetPasswordSubmit}
                        submit
                    />
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;
