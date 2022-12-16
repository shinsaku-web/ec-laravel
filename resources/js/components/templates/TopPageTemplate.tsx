import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const TopPageTemplate = () => {
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);
    console.log(user);

    if (user.id === null) {
        navigate("/login");
    }

    return (
        <div>
            <h2>トップページです。</h2>
            <p>
                ログイン済みなら商品一覧、未ログインなら「未ログイン」と書いたページでOK
            </p>
            <p>{user.name}さん</p>
            <a href="/login">ログインページ</a>
            <hr />
        </div>
    );
};
