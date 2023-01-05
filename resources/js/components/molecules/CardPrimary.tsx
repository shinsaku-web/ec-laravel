import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { USER_TYPE } from "../../constants/userTypes";

interface Props {
    images: string[];
    name: string;
    information: string;
    is_selling: boolean;
    price: number;
    category: string;
    userType: USER_TYPE;
}

export const CardPrimary = ({
    images,
    name,
    information,
    is_selling,
    price,
    category,
    userType,
}: Props) => {
    switch (userType) {
        case "admin":
            return <p>商品はありません。</p>;
        case "owner":
            return (
                <Card>
                    <Card.Img
                        variant="top"
                        src={"/storage/products/" + images[0]}
                        width={300}
                        height={200}
                        style={{ objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Badge className="p-2" bg="primary">
                            {category}
                        </Badge>
                        <div style={{ height: 16 }} />
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{information}</Card.Text>
                        <p>税込価格:${price}</p>
                        {is_selling ? (
                            <Badge className="p-2" bg="info">
                                販売中
                            </Badge>
                        ) : (
                            <Badge className="p-2" bg="danger">
                                販売終了
                            </Badge>
                        )}
                        <div style={{ height: 16 }} />
                        <Button variant="primary">編集する</Button>
                    </Card.Body>
                </Card>
            );
        case "user":
            return (
                <Card>
                    <Card.Img
                        variant="top"
                        src={images[0]}
                        width={300}
                        height={200}
                        style={{ objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Badge className="p-2" bg="info">
                            販売中
                        </Badge>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{information}</Card.Text>
                        <p>税込価格:${price}</p>
                        {is_selling ? (
                            <Badge className="p-2" bg="info">
                                販売中
                            </Badge>
                        ) : (
                            <Badge className="p-2" bg="danger">
                                販売終了
                            </Badge>
                        )}
                        <Button variant="primary">カートに入れる</Button>
                    </Card.Body>
                </Card>
            );

        default:
            return <p>商品はありません。</p>;
    }
};
