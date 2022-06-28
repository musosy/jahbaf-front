export const useSetHeaders = (token: string, key?: string) => {
    if (key) localStorage.setItem(key, token);
    // headers context in App
};
