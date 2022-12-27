import { USER_TYPE } from "../constants/userTypes";

export interface User {
    id: number | null;
    name: string | null;
}

export type Auth = {
    [key in USER_TYPE]: User;
};
