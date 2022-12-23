import { GuestPageLayout } from "../../components/organisms/GuestPageLayout";
import { LoginForm } from "../../components/organisms/LoginForm";

export const LoginAdminPage = () => {
    return (
        <div>
            <GuestPageLayout>
                <div style={{ maxWidth: "600px", margin: "auto" }}>
                    <h3 className="pb-4 pt-4 text-center">管理者ログイン</h3>
                    <LoginForm userType="admin" />
                </div>
            </GuestPageLayout>
        </div>
    );
};
