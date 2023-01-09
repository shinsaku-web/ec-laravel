import {
    Alert,
    Button,
    FormCheck,
    FormControl,
    FormGroup,
    FormLabel,
} from "react-bootstrap";
import { Form } from "react-router-dom";
import { useShopUpdate } from "../../../hooks/useShopUpdate";

export const ShopUpdate = () => {
    const {
        inputShop,
        handleChangeName,
        handleChangeInfo,
        handleChangeImage,
        handleChangeStatus,
        handleSubmit,
        error,
    } = useShopUpdate();

    return (
        <div>
            <h2>shopを編集</h2>
            <div style={{ height: 16 }}></div>
            <Form
                action=""
                encType="multipart/form-data"
                style={{
                    border: "1px solid #ddd",
                    padding: "24px",
                    borderRadius: "8px",
                }}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                {error && (
                    <Alert style={{ fontWeight: "bold" }} variant="danger">
                        Something is Wrong !
                    </Alert>
                )}
                <FormGroup className="mb-3" controlId="name">
                    <FormLabel>Shop Name</FormLabel>
                    <FormControl
                        type="name"
                        placeholder="Enter Shop Name"
                        onChange={handleChangeName}
                        value={inputShop.name}
                    />
                </FormGroup>
                <FormGroup className="mb-3" controlId="information">
                    <FormLabel>Shop Information</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        placeholder="Enter Shop Information"
                        onChange={handleChangeInfo}
                        value={inputShop.information}
                    />
                </FormGroup>
                <FormGroup className="mb-3" controlId="image">
                    <FormLabel>Shop Image</FormLabel>
                    <FormControl
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={handleChangeImage}
                    />
                </FormGroup>
                <FormGroup className="mb-3" controlId="status">
                    <FormLabel>Shop Status</FormLabel>
                    <FormCheck
                        type="switch"
                        id="shop-status"
                        label="販売中"
                        onChange={handleChangeStatus}
                        checked={inputShop.status}
                    />
                </FormGroup>
                <div className="d-grid pt-2">
                    <Button variant="primary" type="submit">
                        変更する
                    </Button>
                </div>
            </Form>
        </div>
    );
};
