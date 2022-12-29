import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { USER_TYPE } from "../constants/userTypes";

export const useRegister = (userType: USER_TYPE) => {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPassword2, setInputPassword2] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const getUrl = (userType: string) => {
                switch (userType) {
                    case "user":
                        return `/api/${userType}`;
                    case "owner":
                        return `/api/admin/owners`;
                    case "admin":
                        return `/api/${userType}`;
                    default:
                        return "/";
                }
            };
            const { status } = await ApiClient.post(getUrl(userType), {
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
                        navigate(`/admin`);
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
        handleRegister,
    };
};
