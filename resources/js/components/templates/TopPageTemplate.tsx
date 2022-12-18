import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const TopPageTemplate = () => {
    const navigate = useNavigate();
    const { id, name } = useAuth();
    useEffect(() => {
        if (id === null) {
            navigate("/");
        }
    }, [id]);

    return (
        <div>
            <h2>トップページです。</h2>
            <p>
                ログイン済みなら商品一覧、未ログインなら「未ログイン」と書いたページでOK
            </p>
            <p>{name}さん</p>
            <a href="/login">ログインページ</a>
            <hr />
        </div>
    );
};
