import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { ApiClient } from "../../apis/ApiClient";
import { CardImages } from "../../components/molecules/CardImages";
import { Image } from "../../types/image";

export const ImagePage = () => {
    const [images, setImages] = useState<
        Pick<Image, "id" | "filename" | "title">[]
    >([]);
    useEffect(() => {
        (async () => {
            const { data } = await ApiClient("/api/owner/images");

            setImages(data.data);
        })();
    }, []);

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
                <h3>画像一覧</h3>
                <Button href="/owner/images/create" variant="success">
                    画像を新規登録する
                </Button>
            </div>
            <div>
                <Row xs={2} lg={4} className="g-0">
                    {images.map((image, i) => (
                        <CardImages
                            key={i}
                            {...image}
                            href={"/owner/images/update/" + image.id}
                        />
                    ))}
                </Row>
            </div>
        </div>
    );
};
