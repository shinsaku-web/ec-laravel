import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUserForm } from "../../components/organisms/UpdateUserForm";
import { useOwner } from "../../hooks/useOwner";

export const UpdateOwner = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    if (id === undefined) {
        return <p className="text-center">オーナーが存在しません</p>;
    }
    const { owner } = useOwner(parseInt(id));

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
            <div style={{ padding: 20 }} />
            <Button onClick={() => navigate("/admin")} variant="info">
                戻る
            </Button>
        </div>
    );
};
