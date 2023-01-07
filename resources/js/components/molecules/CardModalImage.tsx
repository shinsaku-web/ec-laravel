import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface Props {
    filename: string;
    title: string | null;
}

export const CardModalImage = ({ filename, title }: Props) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    return (
        <div
            className="text-center border"
            style={{ cursor: "pointer", position: "relative" }}
            onClick={() => setIsSelected(!isSelected)}
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
