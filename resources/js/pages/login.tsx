import { GuestPageLayout } from "../components/organisms/GuestPageLayout";
import { LoginForm } from "../components/organisms/LoginForm";

export const LoginUserPage = () => {
    return (
        <div>
            <GuestPageLayout guestType="user">
                <div style={{ maxWidth: "600px", margin: "auto" }}>
                    <h3 className="pb-4 pt-4 text-center">ログイン</h3>
                    <LoginForm userType="user" />
                </div>
            </GuestPageLayout>
        </div>
    );
};
