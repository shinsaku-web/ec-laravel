import ReactLoading from "react-loading";

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
                <ReactLoading
                    type="spin"
                    color="#0072BC"
                    height="100px"
                    width="100px"
                    className="mx-auto"
                />
                <p className="text-center mt-3">読み込み中...</p>
            </div>
        </section>
    );
};
