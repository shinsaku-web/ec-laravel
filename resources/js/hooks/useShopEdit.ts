import { useState } from "react";
import { ApiClient } from "../apis/ApiClient";

interface Input {
    name: string;
    information: string;
    image: File | null;
    status: boolean;
}

export const useShopEdit = () => {
    const initialInputs = {
        name: "",
        information: "",
        image: null,
        status: false,
    };
    const [inputShop, setInputShop] = useState<Input>(initialInputs);
    const [error, setError] = useState<boolean>(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputShop((prev) => ({ ...prev, name: e.target.value }));
    };
    const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputShop((prev) => ({ ...prev, information: e.target.value }));
    };
    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setInputShop((prev) => ({
                ...prev,
                image: files[0],
            }));
        }
    };
    const handleChangeStatus = () => {
        setInputShop((prev) => ({ ...prev, status: !prev.status }));
    };

    const handleSubmit = () => {
        (async () => {
            try {
                const { name, information, image, status } = inputShop;
                if (!image) {
                    throw new Error("画像を入れてください。");
                }
                const formData = new FormData();
                formData.append("name", name);
                formData.append("information", information);
                formData.append("image", image);
                formData.append("status", status.toString());
                formData.append("_method", "PUT");
                const { data } = await ApiClient.post(
                    "/api/owner/shop/1",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(data);

                setInputShop(initialInputs); //リダイレクトでいいかも
            } catch (error) {
                console.error(error);
                setError(true);
            }
        })();
    };

    return {
        handleChangeName,
        handleChangeInfo,
        handleChangeImage,
        handleChangeStatus,
        handleSubmit,
        error,
    };
};
