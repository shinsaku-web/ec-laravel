import { GuestPageLayout } from "../components/organisms/GuestPageLayout";
import { LoginForm } from "../components/organisms/LoginForm";

export const RegisterUserPage = () => {
    return (
        <div>
            <GuestPageLayout>
                <div style={{ maxWidth: "600px", margin: "auto" }}>
                    <h3 className="pb-4 pt-4 text-center">会員登録</h3>
                    <LoginForm />
                </div>
            </GuestPageLayout>
        </div>
    );
};
