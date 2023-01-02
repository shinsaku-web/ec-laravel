import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";

interface Input {
    title: string | null;
    filename: string;
}

export const useImageUpdate = () => {
    const initState = {
        title: null,
        filename: "",
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        (async () => {
            try {
                const { title } = input;
                const formData = new FormData();

                formData.append("title", title === null ? "" : title);
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

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { title, filename },
                } = await ApiClient("/api/owner/images/" + id + "/edit");

                setInput((prev) => ({
                    ...prev,
                    title,
                    filename,
                }));
            } catch (error) {
                console.error(error);
                navigate("/404");
            }
        })();
    }, []);

    return {
        input,
        handleChangeTitle,
        handleSubmit,
        error,
    };
};
