import { useEffect } from "react";
import { ApiClient } from "../../apis/ApiClient";

export const TopPageTemplate = () => {
    const fetchData = async () => {
        try {
            const { data } = await ApiClient.get("/api/users");
            // const {data} = await ApiClient.get("/api/owner");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h3>test</h3>
            <p>top page</p>
        </div>
    );
};
