import { autoLogin } from "services";

export const useGetSelf = async () => {
    const token = localStorage.getItem("jahbaf-token") ?? "";
    const data = await autoLogin(token);
    const { ...rest } = data;
    let isConfirmed = false;
    let isLoggedIn = false;
    if (data.status === 200) {
        isConfirmed = data.user.activated ? data.user.activated : false;
        isLoggedIn = Boolean(data.user.email);
    }
    return { isLoggedIn, isConfirmed, ...rest };
};
