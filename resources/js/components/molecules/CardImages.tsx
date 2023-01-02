import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface Props {
    filename: string | null;
    title: string | null;
    href: string;
}
export const CardImages = ({ filename, title, href }: Props) => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={
                    !filename
                        ? "/images/no_image.jpg"
                        : "/storage/images/" + filename
                }
                width={300}
                height={200}
                style={{ objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <br />
                <Button style={{ color: "#fff" }} variant="primary" href={href}>
                    編集する
                </Button>
            </Card.Body>
        </Card>
    );
};
