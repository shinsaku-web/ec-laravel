import { useEffect, useState } from "react";
import {
    Alert,
    Button,
    FormCheck,
    FormControl,
    FormGroup,
    FormLabel,
} from "react-bootstrap";
import { Form, useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../../../apis/ApiClient";
import { useShopEdit } from "../../../hooks/useShopEdit";
import { Shop } from "../../../types/shop";

export const ShopEdit = () => {
    const {
        handleChangeName,
        handleChangeInfo,
        handleChangeImage,
        handleChangeStatus,
        handleSubmit,
        error,
    } = useShopEdit();
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialShop, setInitialShop] = useState<Shop | null>(null);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await ApiClient("/api/owner/shop/" + id);
                setInitialShop((prev) => ({ ...prev, ...data }));
            } catch (error) {
                console.error(error);
                navigate("/404");
            }
        })();
    }, []);

    if (!initialShop) {
        return <div>データの取得に失敗しました。</div>;
    }

    return (
        <div>
            <h2>shopを編集</h2>
            <div>test</div>
            <p>{initialShop.name}</p>
            <p>{initialShop.information}</p>
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
                    />
                </FormGroup>
                <FormGroup className="mb-3" controlId="information">
                    <FormLabel>Shop Information</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        placeholder="Enter Shop Information"
                        onChange={handleChangeInfo}
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
