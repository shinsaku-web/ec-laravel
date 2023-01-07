import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ApiClient } from "../../../apis/ApiClient";
import { CardPrimary } from "../../../components/molecules/CardPrimary";
import { ProductIndex } from "../../../types/product";

export const ProductsIndexPage = () => {
    const [products, setProducts] = useState<ProductIndex[]>([]);
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                }}
            >
                <h3>商品一覧</h3>
                <Button href="/owner/products/create" variant="success">
                    商品を新規登録する
                </Button>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {products.map((product, idx) => (
                    <Col key={idx}>
                        <CardPrimary
                            images={[
                                product.image_first?.filename || "",
                                product.image_second?.filename || "",
                                product.image_third?.filename || "",
                                product.image_fourth?.filename || "",
                            ]}
                            name={product.name}
                            information={product.information}
                            is_selling={product.is_selling}
                            price={product.price}
                            category={product.category.name}
                            userType="owner"
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
