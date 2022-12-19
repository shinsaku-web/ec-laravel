import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";

export const useRegister = () => {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPassword2, setInputPassword2] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await ApiClient.post("/api/user", {
                name: inputName,
                email: inputEmail,
                password: inputPassword,
                password2: inputPassword2,
            });
            console.log(data);
            navigate("/login");
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
