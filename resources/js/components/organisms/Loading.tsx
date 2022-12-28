import { Spinner } from "react-bootstrap";

export const Loading = () => {
    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <div>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <p className="text-center mt-3">読み込み中...</p>
            </div>
        </section>
    );
};
