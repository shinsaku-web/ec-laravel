import { useEffect, useState } from "react";
import { ApiClient } from "../apis/ApiClient";
import { UserInfo } from "../types/user";

export const useOwner = () => {
    const [owners, setOwners] = useState<UserInfo[] | []>([]);
    useEffect(() => {
        (async () => {
            const { data }: { data: UserInfo[] } = await ApiClient(
                "/api/admin/owners"
            );
            setOwners([...data]);
        })();
        return () => setOwners([]);
    }, []);
    return { owners };
};
