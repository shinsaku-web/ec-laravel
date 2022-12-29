import { useEffect, useState } from "react";
import { ApiClient } from "../../apis/ApiClient";
import { Shop } from "../../types/shop";

export const ShopsPage = () => {
    const [shops, setShops] = useState<Shop[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await ApiClient("/api/owner/shop");
                setShops(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    return (
        <div>
            <p>店舗一覧ページ</p>
            <p>
                {shops.map((shop) => (
                    <div key={shop.id}>
                        <div>{shop.name}</div>
                    </div>
                ))}
            </p>
        </div>
    );
};
