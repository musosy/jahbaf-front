import { useSetHeaders } from 'hooks';
import React from 'react';

/**
  * To use this function, you need to pass the name of the input through. It allows us to
  * know which key needs to be filled in.
  * @param e - The event that is triggered when the user types in the input.
  */
export function onInputChange<T> (
        e: React.ChangeEvent<HTMLInputElement>,
        setState: { (value: T): void },
        userInput: T
    ): void {
    const { name, value } = e.target;
    setState({ ...userInput, [name]: value });
}

/**
 * This function is used to logout the user.
 * @returns void
 */
export function onLogout (): void {
    localStorage.removeItem('jahbaf-token');
    useSetHeaders('');
    window.location.reload(); // Force self to refetch
}
