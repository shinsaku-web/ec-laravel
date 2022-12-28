import { GuestPageLayout } from "../components/organisms/GuestPageLayout";
import { RegisterForm } from "../components/organisms/RegisterForm";

export const RegisterUserPage = () => {
    return (
        <div>
            <GuestPageLayout guestType="user">
                <div style={{ maxWidth: "600px", margin: "auto" }}>
                    <h3 className="pb-4 pt-4 text-center">ユーザー登録</h3>
                    <RegisterForm userType="user" />
                </div>
            </GuestPageLayout>
        </div>
    );
};
