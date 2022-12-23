import { Row, Col } from "react-bootstrap";
import { CardPrimary } from "../molecules/CardPrimary";

export const OwnerTopPageTemplate = () => {
    return (
        <div>
            <h3 className="mt-4 mb-4">店舗管理トップページ</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col key={idx}>
                        <CardPrimary />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
