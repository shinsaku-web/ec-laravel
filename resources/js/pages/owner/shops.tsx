import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ApiClient } from "../../apis/ApiClient";
import { CardShopList } from "../../components/molecules/CardShopList";
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
            {shops.map((shop) => (
                <div key={shop.id}>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        <Col>
                            <CardShopList
                                img={shop.filename}
                                name={shop.name}
                                desc={shop.information}
                                is_selling={shop.is_selling === 1}
                                editLink={"/owner/shops/edit/" + shop.id}
                            />
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
};
