import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../../../apis/ApiClient";
import { Shop } from "../../../types/shop";

export const ShopEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [shop, setShop] = useState<Shop | null>(null);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await ApiClient("/api/owner/shop/" + id);
                setShop((prev) => ({ ...prev, ...data }));
            } catch (error) {
                console.error(error);
                navigate("/404");
            }
        })();
    }, []);

    if (!shop) {
        return <div>データの取得に失敗しました。</div>;
    }

    return (
        <div>
            <h2>edit shop</h2>
            <div>test</div>
            <p>{shop.name}</p>
            <p>{shop.information}</p>
        </div>
    );
};
