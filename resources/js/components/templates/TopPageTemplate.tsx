import { useAuthUser } from "../../hooks/useAuthUser";

export const TopPageTemplate = () => {
    const { name } = useAuthUser();

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
