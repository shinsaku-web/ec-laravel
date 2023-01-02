import { ApiClient } from "../apis/ApiClient";

export const useImageDelete = () => {
    const handleDelete = (id: number) => {
        (async () => {
            try {
                if (confirm("削除しますか？")) {
                    await ApiClient.delete("/api/owner/images/" + id);
                    alert("削除しました。");
                }
            } catch (error) {
                console.error(error);
            }
        })();
    };

    return {
        handleDelete,
    };
};
