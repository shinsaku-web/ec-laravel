import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "../pages";
import { ImagePage } from "../pages/owner/images";
import { ShopsPage } from "../pages/owner/shops";
import { ProductPage } from "../pages/product/[id]";
import { CartPage } from "../pages/cart";
import { RegisterUserPage } from "../pages/register";
import { RegisterOwnerPage } from "../pages/owner/register";
import { LoginUserPage } from "../pages/login";
import { ProductsIndexPage } from "../pages/owner/products";
import { ProductCreatePage } from "../pages/owner/products/create";
import { LoginOwnerPage } from "../pages/owner/login";
import { OwnerPageLayout } from "../components/organisms/OwnerPageLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/owner/register",
        element: <RegisterOwnerPage />,
    },
    {
        path: "/owner/login",
        element: <LoginOwnerPage />,
    },
    {
        path: "/product/:id",
        element: <ProductPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "/register",
        element: <RegisterUserPage />,
    },
    {
        path: "/login",
        element: <LoginUserPage />,
    },
    {
        path: "/owner",
        element: <OwnerPageLayout />,
        children: [
            {
                path: "/owner/products",
                element: <ProductsIndexPage />,
            },
            {
                path: "/owner/products/create",
                element: <ProductCreatePage />,
            },
            {
                path: "/owner/images",
                element: <ImagePage />,
            },
            {
                path: "/owner/shops",
                element: <ShopsPage />,
            },
        ],
    },
]);
