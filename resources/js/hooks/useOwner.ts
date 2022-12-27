import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { UserInfo } from "../types/user";

export const useOwner = () => {
    const navigate = useNavigate();
    // ------------show
    const [owners, setOwners] = useState<UserInfo[] | []>([]);
    const fetchOwners = async () => {
        const { data }: { data: UserInfo[] } = await ApiClient(
            "/api/admin/owners"
        );
        setOwners([...data]);
    };
    useEffect(() => {
        (async () => {
            fetchOwners();
        })();
        return () => setOwners([]);
    }, []);

    // ------------delete
    const handleDelete = (id: number) => {
        const deleteFunc = async (id: number) => {
            try {
                const { data } = await ApiClient.delete(
                    "/api/admin/owners/delete/" + id
                );
                return data;
            } catch (error) {
                console.error(error);
                return null;
            }
        };
        (async () => {
            const result = await deleteFunc(id);
            if (result === null) {
                alert("削除失敗");
            } else {
                alert("削除しました");
                fetchOwners();
            }
        })();
    };
    return { owners, handleDelete };
};
