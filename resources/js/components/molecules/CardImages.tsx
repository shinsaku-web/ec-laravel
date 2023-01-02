import Card from "react-bootstrap/Card";

interface Props {
    filename: string | null;
    title: string | null;
}
export const CardImages = ({ filename, title }: Props) => {
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
            </Card.Body>
        </Card>
    );
};
