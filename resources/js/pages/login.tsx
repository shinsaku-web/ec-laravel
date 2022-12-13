import { useState } from "react";
import { ApiClient } from "../apis/ApiClient";
import { DefaultPageLayout } from "../components/organisms/DefaultPageLayout";
import { LoginForm } from "../components/organisms/LoginForm";

export const LoginUserPage = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleLogin = async () => {
        try {
            const { data } = await ApiClient.get("/sanctum/csrf-cookie")
                .then(() => {
                    return ApiClient.post("/api/user/login", {
                        email: inputEmail,
                        password: inputPassword,
                        // email: "test@example.com",
                        // password: "password",
                    });
                })
                .catch((error) => {
                    throw error;
                });
            console.log(data);
            ApiClient.get("/api/user").then((res) => {
                console.log(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <DefaultPageLayout>
                <div>
                    <h1>ユーザーログインページ</h1>
                    <hr />
                    <div style={{ height: "40px" }}></div>
                    <h2>ログイン成功時orログイン済みならトップに飛ばす。</h2>
                    <hr />
                    <div style={{ height: "40px" }}></div>
                    <LoginForm
                        email={inputEmail}
                        password={inputPassword}
                        onSubmit={handleLogin}
                    />
                </div>
            </DefaultPageLayout>
        </div>
    );
};
