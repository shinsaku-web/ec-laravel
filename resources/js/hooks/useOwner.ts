import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { User } from "../types/user";

export const useOwner = (id?: number) => {
    const navigate = useNavigate();
    // ------------index
    const [owners, setOwners] = useState<User[] | []>([]);
    const fetchOwners = async () => {
        const { data }: { data: User[] } = await ApiClient("/api/admin/owners");
        setOwners([...data]);
    };

    // -------------show
    const [owner, setOwner] = useState<User | null>(null);
    const fetchOwner = async (id: number) => {
        const { data } = await ApiClient("/api/admin/owners/" + id);
        setOwner(data);
    };

    // -----------update
    const handleUpdate = async ({
        id,
        name,
        email,
        password,
        password2,
    }: Omit<User, "created_at">) => {
        try {
            const { status } = await ApiClient.put(
                `/api/admin/owners/update/${id}`,
                {
                    name,
                    email,
                    password,
                    password2,
                }
            );
            if (status === 200) {
                alert("更新しました。");
                navigate("/admin");
            } else {
                throw new Error("更新に失敗しました。");
            }
        } catch (error) {
            alert("更新に失敗しました。");
            console.error(error);
        }
    };

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
            if (!confirm("本当に削除しますか？")) {
                return;
            }
            const result = await deleteFunc(id);
            if (result === null) {
                alert("削除に失敗しました");
            } else {
                fetchOwners();
            }
        })();
    };

    // ---------- side Effect
    useEffect(() => {
        (async () => {
            await fetchOwners();

            try {
                if (id === undefined) {
                    throw new Error("id未指定");
                }
                await fetchOwner(id);
                await fetchOwners();
            } catch (error) {
                setOwner(null);
            }
        })();
    }, []);
    return { owners, owner, handleUpdate, handleDelete };
};
