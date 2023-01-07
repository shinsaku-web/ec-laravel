import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface Props {
    isShow: boolean;
    onHide: () => void;
}

export const ModalSelectImage = ({ isShow, onHide }: Props) => {
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
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="mb-3">画像を選択</h4>
                <Row xs={2} md={3} lg={4} className="g-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col key={idx}>
                            <div className="text-center">
                                <img
                                    src=""
                                    alt=""
                                    width={75}
                                    height={50}
                                    style={{ objectFit: "contain" }}
                                />
                                <figcaption>タイトル</figcaption>
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
