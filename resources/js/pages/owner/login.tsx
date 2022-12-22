import { GuestPageLayout } from "../../components/organisms/GuestPageLayout";
import { LoginForm } from "../../components/organisms/LoginForm";

export const LoginOwnerPage = () => {
    return (
        <div>
            <GuestPageLayout>
                <div style={{ maxWidth: "600px", margin: "auto" }}>
                    <h3 className="pb-4 pt-4 text-center">ログイン</h3>
                    <LoginForm userType="owner" />
                </div>
            </GuestPageLayout>
        </div>
    );
};
