import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { Shop } from "../types/shop";

interface Input {
    name: string;
    information: string;
    image: File | null;
    status: boolean;
}

export const useShopUpdate = () => {
    const initState = {
        name: "",
        information: "",
        image: null,
        status: false,
    };
    const [inputShop, setInputShop] = useState<Input>(initState);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const { id } = useParams();

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
                await ApiClient.post("/api/owner/shop/" + id, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                navigate("/owner/shops");
            } catch (error) {
                console.error(error);
                setError(true);
            }
        })();
    };

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { name, information, is_selling },
                }: { data: Shop } = await ApiClient("/api/owner/shop/" + id);
                setInputShop((prev) => ({
                    ...prev,
                    name,
                    information,
                    image: null,
                    status: is_selling === 1,
                }));
            } catch (error) {
                console.error(error);
                navigate("/404");
            }
        })();
    }, []);

    return {
        inputShop,
        handleChangeName,
        handleChangeInfo,
        handleChangeImage,
        handleChangeStatus,
        handleSubmit,
        error,
    };
};
