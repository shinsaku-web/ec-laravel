import { useState } from "react";
import { ProductInput } from "../types/product";

type Inputs = Omit<ProductInput, "id" | "created_at" | "updated_at">;

export const useProductCreate = () => {
    const initState = {
        shop_id: 1, //取得してくること
        name: "",
        information: "",
        price: 0,
        is_selling: false,
        sort_order: 1,
        secondary_category_id: 1, //取得してくること
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    };
    const [inputs, setInputs] = useState<Inputs>(initState);
    const [error, setError] = useState<boolean>(false);
    console.log(inputs);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(true);
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

    // const shopList
    // const categoryList

    return {
        inputs,
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
