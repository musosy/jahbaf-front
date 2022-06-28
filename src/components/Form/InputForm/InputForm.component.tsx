import './InputForm.style.scss';
import { InputFormProps } from './InputForm.props';

const InputForm = ({ className, label, placeholder, isRequired, type, onChange, value, name }: InputFormProps): any => {
    return (
        <div className="input--wrapper">
            {label &&
           <label htmlFor={name} ><b>{label}</b></label>}
            {isRequired
                ? <input
                    value={value}
                    className={`input ${className}`}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    required={isRequired}
                />
                : <input
                    value={value}
                    className={`input ${className}`}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                />}
        </div>
    );
};

InputForm.defaultProps = {
    label: '',
    type: 'text'
};

export default InputForm;
