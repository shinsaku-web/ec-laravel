import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "../pages";
import { ImagePage } from "../pages/owner/images";
import { ShopsPage } from "../pages/owner/shops";
import { ProductPage } from "../pages/product/[id]";
import { CartPage } from "../pages/cart";
import { RegisterUserPage } from "../pages/register";
import { LoginUserPage } from "../pages/login";
import { ProductsIndexPage } from "../pages/owner/products";
import { ProductCreatePage } from "../pages/owner/products/create";
import { LoginOwnerPage } from "../pages/owner/login";
import { OwnerPageLayout } from "../components/organisms/OwnerPageLayout";
import { AdminPageLayout } from "../components/organisms/AdminPageLayout";
import { OwnerIndexPage } from "../pages/owner";
import { LoginAdminPage } from "../pages/admin/login";
import { AdminIndexPage } from "../pages/admin";
import { CreateOwner } from "../pages/admin/createOwner";
import { UpdateOwner } from "../pages/admin/updateOwner";
import { NotFound } from "../pages/404";
import { CreateImages } from "../pages/owner/images/create";
import { UpdateImages } from "../pages/owner/images/update";
import { ShopUpdate } from "../pages/owner/shops/update";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/404",
        element: <NotFound />,
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
        path: "/owner/login",
        element: <LoginOwnerPage />,
    },
    {
        path: "/admin/login",
        element: <LoginAdminPage />,
    },
    {
        path: "/owner",
        element: <OwnerPageLayout />,
        children: [
            {
                path: "/owner",
                element: <OwnerIndexPage />,
            },
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
                path: "/owner/images/create",
                element: <CreateImages />,
            },
            {
                path: "/owner/images/update/:id",
                element: <UpdateImages />,
            },
            {
                path: "/owner/shops",
                element: <ShopsPage />,
            },
            {
                path: "/owner/shops/update/:id",
                element: <ShopUpdate />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminPageLayout />,
        children: [
            {
                path: "/admin",
                element: <AdminIndexPage />,
            },
            {
                path: "/admin/create-owner",
                element: <CreateOwner />,
            },
            {
                path: "/admin/update-owner/:id",
                element: <UpdateOwner />,
            },
        ],
    },
]);
