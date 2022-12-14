import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { USER_TYPE } from "../constants/userTypes";
import { adminAuth } from "../features/admin/adminSlice";
import { ownerAuth } from "../features/owner/ownerSlice";
import { userAuth } from "../features/user/userSlice";

export const useLogin = (userType: USER_TYPE) => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { status } = await ApiClient.get("/sanctum/csrf-cookie")
                .then(() => {
                    return ApiClient.post(`/api/${userType}/login`, {
                        email: inputEmail,
                        password: inputPassword,
                    });
                })
                .catch((err) => {
                    setError(true);
                    throw err;
                });

            if (status === 200) {
                const {
                    data: { id, name },
                } = await ApiClient.get(`/api/${userType}`);

                switch (userType) {
                    case "user":
                        dispatch(userAuth({ id, name }));
                        navigate("/");
                        break;
                    case "owner":
                        dispatch(ownerAuth({ id, name }));
                        navigate("/owner");
                        break;
                    case "admin":
                        dispatch(adminAuth({ id, name }));
                        navigate("/admin");
                        break;

                    default:
                        throw new Error("認証に失敗しました。");
                }
            } else {
                throw new Error("認証に失敗しました。");
            }
        } catch (error) {
            console.error(error);
        }
    };
    return {
        inputEmail,
        inputPassword,
        error,
        setInputEmail,
        setInputPassword,
        handleLogin,
    };
};
