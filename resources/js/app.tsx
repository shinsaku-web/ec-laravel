import "./bootstrap";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./components/BasicExample";

function App() {
    return (
        <div style={{ padding: "40px" }}>
            <h1 style={{ color: "gold" }}>React App</h1>
            <div>
                <p>add</p>
                <BasicExample />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
