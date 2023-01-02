import {
    Alert,
    Button,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
} from "react-bootstrap";
import { useImageDelete } from "../../../hooks/useImageDelete";
import { useImageUpdate } from "../../../hooks/useImageUpdate";

export const UpdateImages = () => {
    const { input, handleChangeTitle, handleChangeImage, handleSubmit, error } =
        useImageUpdate();
    const { handleDelete } = useImageDelete();
    return (
        <div style={{ maxWidth: 600, margin: "auto" }}>
            <h3>画像の編集</h3>
            <div style={{ height: 8 }}></div>
            <Form
                encType="multipart/form-data"
                style={{
                    border: "1px solid #ddd",
                    padding: "24px",
                    borderRadius: "8px",
                }}
                onSubmit={handleSubmit}
            >
                {error && (
                    <Alert style={{ fontWeight: "bold" }} variant="danger">
                        Something is Wrong !
                    </Alert>
                )}
                <FormGroup className="mb-3" controlId="title">
                    <FormLabel>title</FormLabel>
                    <FormControl
                        type="text"
                        onChange={handleChangeTitle}
                        value={input.title === null ? "" : input.title}
                    />
                </FormGroup>
                <FormGroup className="mb-3" controlId="files">
                    <FormLabel>Images</FormLabel>
                    <FormControl
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={handleChangeImage}
                    />
                </FormGroup>

                {/* forgot password入れる? */}
                <div className="d-flex pt-2">
                    <Button variant="primary" type="submit">
                        変更する
                    </Button>
                    <Button
                        className="mx-3"
                        variant="danger"
                        type="button"
                        onClick={handleDelete}
                    >
                        削除
                    </Button>
                </div>
            </Form>
        </div>
    );
};
