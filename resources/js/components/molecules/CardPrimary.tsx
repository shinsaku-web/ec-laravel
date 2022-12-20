import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CardPrimary = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src="/dummy.jpg"
                width={300}
                height={200}
                style={{ objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>商品名</Card.Title>
                <Card.Text>
                    商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。
                </Card.Text>
                <p>税込価格:$100</p>
                <Button variant="primary">カートに入れる</Button>
            </Card.Body>
        </Card>
    );
};
