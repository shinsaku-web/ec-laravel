import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Image } from "../../types/image";

interface Props {
    id: number;
    filename: string;
    title: string | null;
    setImage: React.Dispatch<
        React.SetStateAction<Pick<Image, "id" | "filename" | "title">[]>
    >;
    selected: boolean;
}

export const CardModalImage = ({
    id,
    filename,
    title,
    setImage,
    selected,
}: Props) => {
    const [isSelected, setIsSelected] = useState<boolean>(selected);
    const handleOnClick = () => {
        setIsSelected(!isSelected);
        if (!selected) {
            setImage((prev) => [
                ...prev,
                {
                    id,
                    filename,
                    title,
                },
            ]);
        } else {
            setImage((prev) => [...prev.filter((image) => image.id !== id)]);
        }
    };
    return (
        <div
            className="text-center border"
            style={{ cursor: "pointer", position: "relative" }}
            onClick={handleOnClick}
        >
            <div
                style={{
                    position: "absolute",
                    background: "white",
                    opacity: "0.5",
                    width: "100%",
                    height: "100%",
                    display: isSelected ? "block" : "none",
                    zIndex: 1,
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: isSelected ? "flex" : "none",
                    flexDirection: "column",
                    zIndex: 1,
                }}
            >
                <AiOutlineCheckCircle color="green" fontSize={48} />
            </div>
            <img
                src={`/storage/products/${filename}`}
                alt={title || ""}
                width={75}
                height={50}
                style={{ objectFit: "contain" }}
                className="mb-3"
            />
            <figcaption>{title || "タイトル未設定"}</figcaption>
        </div>
    );
};
