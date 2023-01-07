import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "../../types/image";

interface Props {
    isShow: boolean;
    onHide: () => void;
    imageList: Image[];
}

export const ModalSelectImage = ({ isShow, onHide, imageList }: Props) => {
    console.log(imageList);

    return (
        <Modal
            show={isShow}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    画像を選択
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row xs={2} md={3} lg={4} className="g-4">
                    {imageList.map((image) => (
                        <Col key={image.id}>
                            <div
                                className="text-center border"
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={`/storage/products/${image.filename}`}
                                    alt={image.title || ""}
                                    width={75}
                                    height={50}
                                    style={{ objectFit: "contain" }}
                                    className="mb-3"
                                />
                                <figcaption>
                                    {image.title || "タイトル未設定"}
                                </figcaption>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};
