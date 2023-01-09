import {
    Alert,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
    FormCheck,
    FormSelect,
    Row,
} from "react-bootstrap";
import { Form } from "react-router-dom";
import { ModalSelectImage } from "../../../components/molecules/ModalSelectImage";
import { useProductCreate } from "../../../hooks/useProductCreate";

export const ProductCreatePage = () => {
    const {
        inputs,
        shops,
        categories,
        imageList,
        handleSubmit,
        handleChangeShop,
        handleChangeName,
        handleChangeInfo,
        handleChangePrice,
        handleChangeIsSelling,
        handleChangeSortOrder,
        handleChangeStock,
        handleChangeCategory,
        modalShow,
        setModalShow,
        selectedImages,
        setSelectedImages,
        error,
    } = useProductCreate();

    return (
        <div style={{ maxWidth: 600, margin: "auto" }}>
            <h3>商品登録</h3>
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
                {error && (
                    <Alert style={{ fontWeight: "bold" }} variant="danger">
                        Something is Wrong !
                    </Alert>
                )}
                <FormGroup className="mb-3" controlId="shop">
                    <FormLabel>Shopを選択</FormLabel>
                    <FormSelect
                        aria-label="select shop"
                        onChange={handleChangeShop}
                    >
                        <option>Shopを選択</option>
                        {shops.map((shop) => (
                            <option key={shop.id} value={shop.id}>
                                {shop.name}
                            </option>
                        ))}
                    </FormSelect>
                </FormGroup>

                <FormGroup className="mb-3" controlId="name">
                    <FormLabel>Product Name</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="商品名"
                        onChange={handleChangeName}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="info">
                    <FormLabel>Product Info</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        placeholder="商品情報"
                        onChange={handleChangeInfo}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="price">
                    <FormLabel>Product Price</FormLabel>
                    <FormControl
                        type="number"
                        placeholder="商品価格"
                        onChange={handleChangePrice}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="status">
                    <FormLabel>販売ステータス</FormLabel>
                    <FormCheck
                        type="switch"
                        label={inputs?.is_selling ? "販売中" : "販売停止"}
                        onChange={handleChangeIsSelling}
                        checked={inputs?.is_selling}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="order">
                    <FormLabel>Sort Order</FormLabel>
                    <FormControl
                        type="number"
                        placeholder="1"
                        onChange={handleChangeSortOrder}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="stock">
                    <FormLabel>Inital Stock</FormLabel>
                    <FormControl
                        type="number"
                        placeholder="1~99"
                        onChange={handleChangeStock}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="category">
                    <FormLabel>Category</FormLabel>
                    <FormSelect
                        aria-label="select category"
                        onChange={handleChangeCategory}
                    >
                        <option>Categoryを選択</option>
                        {categories.map((category) => (
                            <optgroup key={category.id} label={category.name}>
                                {category.secondary.map((category2) => (
                                    <option
                                        key={category2.id}
                                        value={category2.id}
                                    >
                                        {category2.name}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </FormSelect>
                </FormGroup>

                <FormGroup className="mb-3" controlId="files">
                    <FormLabel>Images(4枚まで)</FormLabel>
                    <Row xs={2} md={3} className="g-4">
                        {selectedImages.map((image) => (
                            <div key={image.id} className="text-center">
                                <img
                                    src={`/storage/products/${image.filename}`}
                                    alt={image.title || ""}
                                    width={150}
                                    height={100}
                                    style={{ objectFit: "contain" }}
                                />
                                <figcaption>
                                    {image.title || "タイトル未設定"}
                                </figcaption>
                            </div>
                        ))}
                    </Row>
                    <div style={{ height: 24 }} />
                    <Button
                        onClick={() => setModalShow(true)}
                        variant="outline-primary"
                    >
                        画像を選択
                    </Button>
                    <ModalSelectImage
                        isShow={modalShow}
                        onHide={() => setModalShow(false)}
                        imageList={imageList}
                        selectedImages={selectedImages}
                        setImage={setSelectedImages}
                    />
                </FormGroup>

                <div className="d-grid pt-4">
                    <Button variant="primary" type="submit">
                        登録
                    </Button>
                </div>
            </Form>
        </div>
    );
};
