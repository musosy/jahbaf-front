import { Button, Card, Popup } from 'components';
import InputForm from 'components/Form/InputForm/InputForm.component';
import { emailRegexp } from 'helpers/loginValidationPolicy.helpers';
import { useEffect, useState } from 'react';
import { resetPasswordMail } from 'services/auth.service';
import './ForgotPassword.style.scss';

const ForgotPassword = () => {
    const [shouldDisplayPopupConfirm, setShouldDisplayPopupConfirm] = useState(false);
    const [email, setEmail] = useState('');
    const [formValidation, setFormValidation] = useState<boolean>();

    const sendEmail = async () => {
        const result = await resetPasswordMail(email);
        if (result.status === 200) setShouldDisplayPopupConfirm(true);
    };
    const emailSubmit = () => {
        if (formValidation) sendEmail();
    };
    useEffect(() => {
        setFormValidation(Boolean(email.match(emailRegexp)));
    }, [email]);

    return (
        <div className='forgot-password--wrapper'>
            <Card isClosable={false}>
                <>
                    <h2 className='forgot-password--title'>Mot de passe oublié</h2>
                    <br />
                    <p>Entrez votre adresse e-mail, et nous vous enverrons un lien pour récupérer votre compte.</p>
                    <InputForm onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    {!formValidation && email.length >= 4 && <span className='form-validation--error'>Veuillez entrer un e-mail valable</span>}
                    <Button content='ENVOYER' onClickAction={emailSubmit} />
                </>
            </Card>
            {shouldDisplayPopupConfirm &&
            <Popup motion="enter-left">
                <Card
                    title="Nouveau mot de passe"
                    isClosable={true}
                    onCloseAction={() => setShouldDisplayPopupConfirm(false)}
                >
                    <p>
                        Un mail a été envoyé à {email} contenant un lien qui vous permettra de changer votre mot de passe. Si vous n&apos;avez rien reçu, merci de vérifier vos spams.
                    </p>
                </Card>
            </Popup>}
        </div>
    );
};

export default ForgotPassword;
