import { useState } from "react";
import { ApiClient } from "../apis/ApiClient";

interface Input {
    name: string;
    information: string;
    image: string;
    status: boolean;
}

export const useShopEdit = () => {
    const initialInputs = {
        name: "",
        information: "",
        image: "",
        status: true,
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
        setInputShop((prev) => ({ ...prev, image: e.target.value }));
    };
    const handleChangeStatus = () => {
        setInputShop((prev) => ({ ...prev, status: !prev.status }));
    };

    const handleSubmit = () => {
        (async () => {
            try {
                await ApiClient.put("/api/owner/shop/1", inputShop);
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
