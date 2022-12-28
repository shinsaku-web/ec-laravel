import { USER_TYPE } from "../constants/userTypes";

export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    password: string;
    password2: string;
}

export type Auth = {
    [key in USER_TYPE]: Pick<User, "id">;
};
