import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";

export const useProductDelete = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDelete = async () => {
        try {
            if (confirm("削除しますか？")) {
                await ApiClient.delete("/api/owner/products/" + id);
                navigate("/owner/products");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return { handleDelete };
};
