import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
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
    const navigate = useNavigate();

    // console.log(inputs);

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
    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("画像仮");
    };

    useEffect(() => {
        (async () => {
            const {
                data: { shops, categories, images },
            } = await ApiClient("/api/owner/products/create");
            setShops([...shops]);
            setCategories([...categories]);
            console.log(images);
            console.log(
                "eagar loading 時のカラムを絞る、余計なデータは取ってこないように修正"
            );
        })();
    }, []);

    return {
        inputs,
        shops,
        categories,
        handleSubmit,
        handleChangeShop,
        handleChangeName,
        handleChangeInfo,
        handleChangePrice,
        handleChangeIsSelling,
        handleChangeSortOrder,
        handleChangeCategory,
        handleChangeImage,
        error,
    };
};
