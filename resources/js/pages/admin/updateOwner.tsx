import { UpdateUserForm } from "../../components/organisms/UpdateUserForm";

export const UpdateOwner = () => {
    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "auto",
            }}
        >
            <h3 className="pb-4 pt-4 text-center">オーナー編集</h3>
            <UpdateUserForm
                userType="owner"
                defaultEmail="aa"
                defaultName="aaa"
            />
        </div>
    );
};
