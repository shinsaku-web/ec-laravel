import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../../../apis/ApiClient";

export const ShopEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await ApiClient("/api/owner/shop/" + id);
                console.log(data);
            } catch (error) {
                console.error(error);
                navigate("/404");
            }
        })();
    }, []);

    return (
        <div>
            <h2>edit shop</h2>
            <div>test</div>
        </div>
    );
};
