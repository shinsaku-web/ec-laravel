import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
    img: string;
    name: string;
    desc: string;
    is_selling: boolean;
    editLink: string;
}
export const CardShopList = ({
    img,
    name,
    desc,
    is_selling,
    editLink,
}: Props) => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={img === "" ? "/images/no_image.jpg" : img}
                width={300}
                height={200}
                style={{ objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                {is_selling ? (
                    <Badge className="p-2" bg="info">
                        販売中
                    </Badge>
                ) : (
                    <Badge className="p-2" bg="danger">
                        販売終了
                    </Badge>
                )}
                <br />
                <br />
                <Button variant="primary" href={editLink}>
                    編集する
                </Button>
            </Card.Body>
        </Card>
    );
};
