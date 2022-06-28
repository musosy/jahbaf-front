import { FormProps } from './Form.props';
import './Form.style.scss';

const Form = ({ children, onSubmitForm, className }: FormProps) => {
    function onSubmit (e: any) {
        e.preventDefault();
        if (onSubmitForm) {
            onSubmitForm();
        }
    }
    return (
        <form className={`form ${className}`} method="post" onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;
