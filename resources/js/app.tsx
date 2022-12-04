import "./bootstrap";
import "../css/app.css";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
    return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
