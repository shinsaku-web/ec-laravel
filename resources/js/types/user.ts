import { USER_TYPE } from "../constants/userTypes";

export interface User {
    id: number;
    name: string;
}

export interface UserInfo {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export type Auth = {
    [key in USER_TYPE]: User;
};
