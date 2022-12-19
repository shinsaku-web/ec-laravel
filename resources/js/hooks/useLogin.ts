import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { login } from "../features/user/userSlice";

export const useLogin = () => {
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
                    return ApiClient.post("/api/user/login", {
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
                } = await ApiClient.get("/api/user");

                dispatch(login({ id, name }));

                navigate("/");
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
