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
import { useProductDelete } from "../../../hooks/useProductDelete";
import { useProductUpdate } from "../../../hooks/useProductUpdate";

export const ProductUpdatePage = () => {
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
    } = useProductUpdate();

    const { handleDelete } = useProductDelete();

    return (
        <div style={{ maxWidth: 600, margin: "auto" }}>
            <h3>商品の編集</h3>
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
                        value={inputs.shop_id}
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
                        value={inputs.name}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="info">
                    <FormLabel>Product Info</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        placeholder="商品情報"
                        onChange={handleChangeInfo}
                        value={inputs.information}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="price">
                    <FormLabel>Product Price</FormLabel>
                    <FormControl
                        type="number"
                        placeholder="商品価格"
                        onChange={handleChangePrice}
                        value={inputs.price}
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
                        value={inputs.sort_order}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="stock">
                    <FormLabel>Stock Plus Minus</FormLabel>
                    <FormControl
                        type="number"
                        placeholder="1~99"
                        onChange={handleChangeStock}
                        value={inputs.stock}
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="category">
                    <FormLabel>Category</FormLabel>
                    <FormSelect
                        aria-label="select category"
                        onChange={handleChangeCategory}
                        value={inputs.secondary_category_id}
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
                        変更する
                    </Button>
                </div>
            </Form>
            <div style={{ height: 8 }} />
            <div className="d-grid pt-4">
                <Button
                    onClick={handleDelete}
                    variant="outline-danger"
                    type="button"
                >
                    削除
                </Button>
            </div>
            <div style={{ height: 40 }} />
        </div>
    );
};
