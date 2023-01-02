import {
    Alert,
    Button,
    FormControl,
    FormGroup,
    FormLabel,
} from "react-bootstrap";
import { Form } from "react-router-dom";
import { useImageCreate } from "../../../hooks/useImageCreate";

export const CreateImages = () => {
    const { handleChangeImage, handleSubmit } = useImageCreate();
    return (
        <div style={{ maxWidth: 600, margin: "auto" }}>
            <h3>画像アップロード</h3>
            <div style={{ height: 8 }}></div>
            <Form
                action=""
                encType="multipart/form-data"
                style={{
                    border: "1px solid #ddd",
                    padding: "24px",
                    borderRadius: "8px",
                }}
                onSubmit={handleSubmit}
            >
                {"" && (
                    <Alert style={{ fontWeight: "bold" }} variant="danger">
                        Something is Wrong !
                    </Alert>
                )}
                <FormGroup className="mb-3" controlId="files">
                    <FormLabel>Images</FormLabel>
                    <FormControl
                        type="file"
                        multiple
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={handleChangeImage}
                    />
                </FormGroup>

                {/* forgot password入れる? */}
                <div className="d-grid pt-2">
                    <Button variant="primary" type="submit">
                        アップロード
                    </Button>
                </div>
            </Form>
        </div>
    );
};
