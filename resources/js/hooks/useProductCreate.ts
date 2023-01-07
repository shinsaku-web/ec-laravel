import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { Image } from "../types/image";
import { ProductInput } from "../types/product";
import { Shop } from "../types/shop";

type Inputs = Omit<ProductInput, "id" | "created_at" | "updated_at">;

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

export const useProductCreate = () => {
    const initState = {
        shop_id: -1,
        name: "",
        information: "",
        price: 0,
        is_selling: false,
        sort_order: 1,
        secondary_category_id: -1,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
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
    const navigate = useNavigate();

    // console.log(inputs);
    console.log("画像投稿まで作ればOK");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await ApiClient.post(
                "/api/owner/products",
                inputs
            );
            console.log(data);
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
    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInputs((prev) => ({
            ...prev,
            secondary_category_id: parseInt(e.target.value),
        }));
    };

    useEffect(() => {
        (async () => {
            const {
                data: { shops, categories, images },
            } = await ApiClient("/api/owner/products/create");
            setShops([...shops]);
            setCategories([...categories]);
            setImageList([...images]);
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
        handleChangeSortOrder,
        handleChangeCategory,
        modalShow,
        setModalShow,
        selectedImages,
        setSelectedImages,
        error,
    };
};
