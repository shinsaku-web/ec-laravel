import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { USER_TYPE } from "../constants/userTypes";
import { Auth } from "../types/user";

export const useUserUpdate = (
    userType: USER_TYPE,
    defaultName: string,
    defaultEmail: string
) => {
    const [inputName, setInputName] = useState(defaultName);
    const [inputEmail, setInputEmail] = useState(defaultEmail);
    const [inputPassword, setInputPassword] = useState("");
    const [inputPassword2, setInputPassword2] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {
        [userType]: { id },
    } = useSelector((state: Auth) => state);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { status } = await ApiClient.post(`/api/${userType}/${id}`, {
                name: inputName,
                email: inputEmail,
                password: inputPassword,
                password2: inputPassword2,
            });
            if (status === 200) {
                switch (userType) {
                    case "user":
                        navigate(`/login`);
                        break;
                    case "owner":
                        navigate(`/${userType}/login`);
                        break;

                    case "admin":
                        navigate(`/${userType}/login`);
                        break;

                    default:
                        throw new Error("登録に失敗しました");
                }
            } else {
                throw new Error("登録に失敗しました。");
            }
        } catch (error) {
            setError(true);
            console.error(error);
        }
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
        handleLogin,
    };
};
