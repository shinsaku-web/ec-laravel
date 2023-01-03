import { useState, useEffect } from "react";
import { ApiClient } from "../../../apis/ApiClient";
import { Product } from "../../../types/product";

export const ProductsIndexPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await ApiClient("/api/owner/products");
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    return (
        <div>
            {/* {shops.map((shop) => (
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
            ))} */}
        </div>
    );
};
