import { IndexPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <IndexPage />,
            },
            {
                path: "/create",
                element: <TodoCreatePage />,
            },
            {
                path: "/edit/:id",
                element: <TodoEditPage />,
            },
            {
                path: "/detail/:id",
                element: <TodoDetailPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
        ],
    },
]);
