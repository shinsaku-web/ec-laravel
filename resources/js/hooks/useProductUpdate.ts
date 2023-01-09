import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { Image } from "../types/image";
import { Product } from "../types/product";
import { Shop } from "../types/shop";

type Inputs = Omit<Product, "id" | "created_at" | "updated_at"> & {
    stock: number;
};

type Category = {
    id: number;
    name: string;
    secondary: {
        id: number;
        name: string;
        primary_category_id: number;
        sort_order: number;
    }[];
};

export const useProductUpdate = () => {
    const initState = {
        shop_id: -1,
        name: "",
        information: "",
        price: 0,
        is_selling: false,
        sort_order: 1,
        secondary_category_id: -1,
        stock: 0,
    };
    const [inputs, setInputs] = useState<Inputs>(initState);
    const [error, setError] = useState<boolean>(false);
    const [shops, setShops] = useState<Pick<Shop, "id" | "name">[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [imageList, setImageList] = useState<Image[]>([]);
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [selectedImages, setSelectedImages] = useState<
        Pick<Image, "id" | "filename" | "title">[]
    >([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const [image1, image2, image3, image4] = selectedImages.map(
        (image) => image.id
    );
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await ApiClient.put("/api/owner/products/" + id, {
                ...inputs,
                image1: typeof image1 === "number" ? image1 : null,
                image2: typeof image2 === "number" ? image2 : null,
                image3: typeof image3 === "number" ? image3 : null,
                image4: typeof image4 === "number" ? image4 : null,
            });
            navigate("/owner/products");
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };
    const handleChangeShop = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInputs((prev) => ({ ...prev, shop_id: parseInt(e.target.value) }));
    };
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, name: e.target.value }));
    };
    const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, information: e.target.value }));
    };
    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, price: parseInt(e.target.value) }));
    };
    const handleChangeIsSelling = () => {
        setInputs((prev) => ({ ...prev, is_selling: !inputs.is_selling }));
    };
    const handleChangeSortOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({
            ...prev,
            sort_order: parseInt(e.target.value),
        }));
    };
    const handleChangeStock = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({
            ...prev,
            stock: parseInt(e.target.value),
        }));
    };
    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInputs((prev) => ({
            ...prev,
            secondary_category_id: parseInt(e.target.value),
        }));
    };

    useEffect(() => {
        (async () => {
            const {
                data: { shops, categories, images, product },
            } = await ApiClient(`/api/owner/products/${id}/edit`);
            const {
                shop_id,
                name,
                information,
                price,
                is_selling,
                sort_order,
                secondary_category_id,
            }: Product = product;

            setShops([...shops]);
            setCategories([...categories]);
            setImageList([...images]);
            setInputs((prev) => ({
                ...prev,
                shop_id,
                name,
                information,
                price,
                is_selling,
                sort_order,
                secondary_category_id,
            }));
        })();
    }, []);

    return {
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
        handleChangeStock,
        handleChangeSortOrder,
        handleChangeCategory,
        modalShow,
        setModalShow,
        selectedImages,
        setSelectedImages,
        error,
    };
};
