import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ApiClient } from "../../../apis/ApiClient";
import { CardPrimary } from "../../../components/molecules/CardPrimary";
import { Product } from "../../../types/product";

export const ProductsIndexPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await ApiClient("/api/owner/products");
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    if (!products) {
        return <p>商品が未登録です。</p>;
    }
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {products.map((product, idx) => (
                    <Col key={idx}>
                        <CardPrimary
                            images={[
                                product.image_first.filename || "",
                                product.image2 || "",
                                product.image3 || "",
                                product.image4 || "",
                            ]}
                            name={product.name}
                            information={product.information}
                            is_selling={product.is_selling}
                            price={product.price}
                            category={"仮カテゴリー"}
                            userType="owner"
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
