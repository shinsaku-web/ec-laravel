import { RegisterForm } from "../../components/organisms/RegisterForm";

export const CreateOwner = () => {
    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "auto",
            }}
        >
            <h3 className="pb-4 pt-4 text-center">オーナー作成</h3>
            <RegisterForm userType="owner" />
        </div>
    );
};
