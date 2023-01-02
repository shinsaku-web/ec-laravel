import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";

interface Input {
    title: string | null;
    image: File | null;
}

export const useImageUpdate = () => {
    const initState = {
        title: null,
        image: null,
    };
    const [input, setInput] = useState<Input>(initState);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;

        setInput((prev) => ({
            ...prev,
            title: newTitle,
        }));
    };

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files && files[0]) {
            setInput((prev) => ({
                ...prev,
                image: files[0],
            }));
        } else {
            setInput((prev) => ({
                ...prev,
                image: null,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        (async () => {
            try {
                const { title, image } = input;
                if (!image) {
                    throw new Error("画像を入れてください。");
                }
                const formData = new FormData();

                formData.append("title", title === null ? "" : title);
                formData.append("image", image);
                formData.append("_method", "PUT");
                await ApiClient.post("/api/owner/images/" + id, formData, {
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
        handleChangeTitle,
        handleChangeImage,
        handleSubmit,
        error,
    };
};
