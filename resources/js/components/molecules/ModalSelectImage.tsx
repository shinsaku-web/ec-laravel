import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "../../types/image";
import { CardModalImage } from "./CardModalImage";

interface Props {
    isShow: boolean;
    onHide: () => void;
    imageList: Image[];
    selectedImages: Pick<Image, "id" | "filename" | "title">[];
    setImage: React.Dispatch<
        React.SetStateAction<Pick<Image, "id" | "filename" | "title">[]>
    >;
}

export const ModalSelectImage = ({
    isShow,
    onHide,
    imageList,
    selectedImages,
    setImage,
}: Props) => {
    const selectedIDList = selectedImages.map((image) => image.id);
    const isSelected = (id: number) => selectedIDList.includes(id);
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
                    画像を選択（4枚まで）
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ height: 8 }} />
                <Row xs={2} md={3} lg={4} className="g-4">
                    {imageList.map((image) => (
                        <Col key={image.id}>
                            <CardModalImage
                                id={image.id}
                                filename={image.filename}
                                title={image.title}
                                setImage={setImage}
                                selected={() => isSelected(image.id)}
                            />
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
