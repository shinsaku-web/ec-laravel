import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";

export const useImageDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleDelete = () => {
        (async () => {
            try {
                if (confirm("削除しますか？")) {
                    await ApiClient.delete("/api/owner/images/" + id);
                    navigate("/owner/images");
                }
            } catch (error) {
                console.error(error);
            }
        })();
    };

    return {
        handleDelete,
    };
};
