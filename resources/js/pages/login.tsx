import { DefaultPageLayout } from "../components/organisms/DefaultPageLayout";
import { LoginForm } from "../components/organisms/LoginForm";

export const LoginUserPage = () => {
    return (
        <div>
            <DefaultPageLayout>
                <div>
                    <h1 style={{ textAlign: "center" }}>
                        ユーザーログインページ
                    </h1>
                    <hr />
                    <div style={{ height: "24px" }}></div>
                    <p>ログイン成功時orログイン済みならトップに飛ばす。</p>
                    <LoginForm />
                </div>
            </DefaultPageLayout>
        </div>
    );
};
