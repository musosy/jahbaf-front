const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000/api';

export const autoLogin = async (token: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/auto-login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    return await result.json();
};

export const login = async (email: string, password: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: { email, password } })
    });
    return await result.json();
};

export const register = async (name: string, email: string, password: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: { name, email, password } })
    });
    return await result.json();
};

export const confirmAccount = async (token: string): Promise<any> => {
    const url = `${BACKEND_URL}/auth/confirm-account/${token}`;
    console.log(url);
    const result = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    window.location.reload();
    return await result.json();
};

export const resetPasswordMail = async (email: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/reset-password-mail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });
    return await result.json();
};

export const resetPassword = async (token: string, password: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: { token, password } })
    });
    return await result.json();
};
