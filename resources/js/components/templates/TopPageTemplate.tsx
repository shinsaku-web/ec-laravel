import { useEffect } from "react";
import { ApiClient } from "../../apis/ApiClient";

export const TopPageTemplate = () => {
    const fetchData = async () => {
        try {
            // const { data } = await ApiClient.get("/sanctum/csrf-cookie")
            //     .then(() => {
            //         return ApiClient.post("/api/user/login", {
            //             email: "test@example.com",
            //             password: "password",
            //         });
            //     })
            //     .catch((error) => {
            //         throw error;
            //     });
            // console.log(data);
            ApiClient.get("/api/user").then((res) => {
                console.log(res.data);
            });

            // if (data.result) {
            //     ApiClient.get("/api/user").then((res) => {
            //         console.log(res.data);
            //     });
            // }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h2>トップページです。</h2>
            <p>
                ログイン済みなら商品一覧、未ログインなら「未ログイン」と書いたページでOK
            </p>
        </div>
    );
};
