const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000/api';

export const autoLogin = async (token: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/auto-login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    return await result.json();
};

export const login = async (email: string, password: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: { email, password } })
    });
    return await result.json();
};

export const register = async (name: string, email: string, password: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    });
    return await result.json();
};

export const confirmEmail = async (token: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/confirm-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
    });
    return await result.json();
};

export const resetPasswordMail = async (email: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/reset-password-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    });
    return await result.json();
};

export const resetPassword = async (token: string, password: string): Promise<any> => {
    const result = await fetch(`${BACKEND_URL}/auth/reset-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token, password })
    });
    return await result.json();
};
