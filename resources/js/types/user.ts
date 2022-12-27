import { USER_TYPE } from "../constants/userTypes";

export interface User {
    id: number | null;
    name: string | null;
}

export interface UserInfo {
    id: number | null;
    name: string | null;
    email: string | null;
    created: string | null;
}

export type Auth = {
    [key in USER_TYPE]: User;
};
