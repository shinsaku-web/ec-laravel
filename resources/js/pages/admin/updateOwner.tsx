import { useEffect, useState } from "react";
import { ApiClient } from "../../apis/ApiClient";
import { UpdateUserForm } from "../../components/organisms/UpdateUserForm";

export const UpdateOwner = () => {
    const [owner, setOwner] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await ApiClient("/api/admin/owners/1");
                setOwner(data);
            } catch (error) {
                setOwner(null);
            }
        })();
    }, []);

    if (!owner) {
        return <p className="text-center">オーナーが存在しません</p>;
    }
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
                defaultEmail={owner.email}
                defaultName={owner.name}
            />
        </div>
    );
};
