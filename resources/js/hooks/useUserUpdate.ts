import { useState } from "react";
import { useParams } from "react-router-dom";
import { USER_TYPE } from "../constants/userTypes";
import { User } from "../types/user";

export const useUserUpdate = (
    userType: USER_TYPE,
    defaultName: string,
    defaultEmail: string,
    updateUser: (user: Omit<User, "created_at">) => void
) => {
    const [inputName, setInputName] = useState(defaultName);
    const [inputEmail, setInputEmail] = useState(defaultEmail);
    const [inputPassword, setInputPassword] = useState("");
    const [inputPassword2, setInputPassword2] = useState("");
    const [error, setError] = useState(false);
    // const {
    //     [userType]: { id },
    // } = useSelector((state: Auth) => state);
    const { id } = useParams();

    const handleUpdate = () => {
        if (typeof id !== "string") {
            throw new Error("更新に失敗しました！");
        }
        updateUser({
            id: parseInt(id),
            name: inputName,
            email: inputEmail,
            password: inputPassword,
            password2: inputPassword2,
        });
    };

    return {
        inputName,
        inputEmail,
        inputPassword,
        inputPassword2,
        error,
        setInputName,
        setInputEmail,
        setInputPassword,
        setInputPassword2,
        handleUpdate,
    };
};
