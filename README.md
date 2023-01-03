## オーナー側

-   オーナー登録 : /owner/register
-   ログイン : /owner/login
-   店舗情報 : /owner/shops
-   画像管理 : /owner/images
-   商品管理 : /owner/products
-   商品登録 : /owner/products/create

## ユーザー側

-   ユーザー登録 : /register
-   ログイン : /login
-   ホーム（未ログイン） : /
-   ホーム（ログイン、商品一覧） : /
-   商品詳細 : /product/1
-   カート:/cart
-   決済

## 管理者

## ログイン API 仕様

-   グローバル state が空の場合は API にログインユーザーを取得する
-   ログインユーザー情報が返却されたらグローバル state を更新
-   API から返却された情報が無ければ未ログイン扱い
