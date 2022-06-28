import ConfirmAccount from 'components/ConfirmAccount/ConfirmAccount.component';
// import ForgotPassword from 'components/ForgotPassword/ForgotPassword.component';
import Login from 'components/Login/Login.component';
// import ResetPassword from 'components/ResetPassword/ResetPassword.component';
import Register from 'components/Register/Register.component';
import Home from 'pages/Home/Home';
// import { Project } from 'pages/Project';
// import { Projects } from 'pages/Projects';
import { Routes } from './Routes.enum';

/* eslint no-unused-vars: 0 */
export enum NeedsAuth {
    YES,
    NO,
    DONT_MATTER,
}

export type RouteType = {
    path: string;
    component: (props: any) => JSX.Element;
    needsAuth: NeedsAuth;
    props?: any;
    exact?: boolean;
};

export const routes: RouteType[] = [
    {
        path: Routes.HOME,
        component: Home,
        needsAuth: NeedsAuth.YES,
        exact: true
    },
    {
        path: Routes.LOGIN,
        component: Login,
        needsAuth: NeedsAuth.NO
    },
    {
        path: Routes.REGISTER,
        component: Register,
        needsAuth: NeedsAuth.NO
    },
    /*
    {
        path: Routes.PROJECTS,
        component: Projects,
        needsAuth: NeedsAuth.YES,
        exact: true
    }
    {
        path: Routes.PROJECT,
        component: Project,
        needsAuth: NeedsAuth.YES,
        exact: true
    }, */
    {
        path: Routes.CONFIRM_ACCOUNT,
        component: ConfirmAccount,
        needsAuth: NeedsAuth.NO,
        exact: true
    }/*
    {
        path: Routes.FORGOT_PASSWORD,
        component: ForgotPassword,
        needsAuth: NeedsAuth.NO,
        exact: true
    },
    {
        path: Routes.RESET_PASSWORD,
        component: ResetPassword,
        needsAuth: NeedsAuth.NO,
        exact: true
    } */
];
