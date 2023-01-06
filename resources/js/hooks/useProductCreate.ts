import { useEffect, useState } from "react";
import { ApiClient } from "../apis/ApiClient";
import { ProductInput } from "../types/product";
import { Shop } from "../types/shop";

type Inputs = Omit<ProductInput, "id" | "created_at" | "updated_at">;

type Category = {
    id: number;
    name: string;
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

    // console.log(inputs);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await ApiClient.post("/api/owner/products", inputs);
            console.log("登録しました");
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
        setInputs((prev) => ({ ...prev, info: e.target.value }));
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
        const files = e.target.files;
        if (files && files[0]) {
            setInputs((prev) => ({
                ...prev,
                image1: files[0] || null,
                image2: files[1] || null,
                image3: files[2] || null,
                image4: files[3] || null,
            }));
        } else {
            setInputs((prev) => ({
                ...prev,
                image1: null,
                image2: null,
                image3: null,
                image4: null,
            }));
        }
    };

    useEffect(() => {
        (async () => {
            const {
                data: { shops, categories },
            } = await ApiClient("/api/owner/products/create");
            setShops([...shops]);
            setCategories([...categories]);
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
