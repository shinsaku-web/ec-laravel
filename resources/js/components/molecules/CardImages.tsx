import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useImageDelete } from "../../hooks/useImageDelete";

interface Props {
    filename: string | null;
    title: string | null;
    id: number;
}
export const CardImages = ({ filename, title, id }: Props) => {
    const { handleDelete } = useImageDelete();
    return (
        <Card>
            <Card.Img
                variant="top"
                src={
                    !filename
                        ? "/images/no_image.jpg"
                        : "/storage/products/" + filename
                }
                width={300}
                height={200}
                style={{ objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <br />
                <Button
                    style={{ color: "#fff" }}
                    variant="primary"
                    href={"/owner/images/update/" + id}
                >
                    編集する
                </Button>
                <Button
                    style={{ color: "#fff", marginLeft: 16 }}
                    variant="danger"
                    onClick={() => handleDelete(id)}
                >
                    削除
                </Button>
            </Card.Body>
        </Card>
    );
};
