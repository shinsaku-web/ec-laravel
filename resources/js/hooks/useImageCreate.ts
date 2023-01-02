import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";

interface Input {
    images: FileList | null;
}

export const useImageCreate = () => {
    const initState = {
        images: null,
    };
    const [input, setInput] = useState<Input>(initState);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            setInput((prev) => ({
                ...prev,
                images: files,
            }));
        } else {
            setInput(initState);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        (async () => {
            try {
                const { images } = input;
                if (!images) {
                    throw new Error("画像を入れてください。");
                }
                const formData = new FormData();

                Array.from(images).forEach((image) => {
                    formData.append("images[]", image);
                });

                await ApiClient.post("/api/owner/images", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                navigate("/owner/images");
            } catch (error) {
                console.error(error);
                setError(true);
            }
        })();
    };

    return {
        handleChangeImage,
        handleSubmit,
        error,
    };
};
