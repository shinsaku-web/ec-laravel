import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { UserInfo } from "../types/user";

export const useOwner = (id?: number) => {
    const navigate = useNavigate();
    // ------------index
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
    }, []);

    // -------------show
    const [owner, setOwner] = useState<UserInfo | null>(null);
    useEffect(() => {
        (async () => {
            try {
                if (id === undefined) {
                    throw new Error("id未指定");
                }
                const { data } = await ApiClient("/api/admin/owners/" + id);
                setOwner(data);
                fetchOwners();
            } catch (error) {
                setOwner(null);
            }
        })();
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
    return { owners, owner, handleDelete };
};
