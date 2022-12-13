import { DefaultPageLayout } from "../components/organisms/DefaultPageLayout";
import { LoginForm } from "../components/organisms/LoginForm";

export const LoginUserPage = () => {
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
                    <LoginForm />
                </div>
            </DefaultPageLayout>
        </div>
    );
};
