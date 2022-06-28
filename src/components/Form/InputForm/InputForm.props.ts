import React from 'react';

export interface InputFormProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    isRequired?: boolean;
    label?: string;
    type?: 'checkbox' | 'password' | 'number' | 'email' | 'text';
    name?: string;
    className?: string;
}
