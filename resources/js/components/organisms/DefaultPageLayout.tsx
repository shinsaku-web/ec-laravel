import { ReactNode } from "react";
import Container from "react-bootstrap/Container";

interface Props {
    children: ReactNode;
}

export const DefaultPageLayout = ({ children }: Props) => {
    return (
        <Container>
            <div
                style={{
                    padding: "80px 40px",
                    maxWidth: "600px",
                    margin: "auto",
                }}
            >
                {children}
            </div>
        </Container>
    );
};
