import { ReactNode } from "react";
import Container from "react-bootstrap/Container";

interface Props {
    children: ReactNode;
}

export const DefaultPageLayout = ({ children }: Props) => {
    return (
        <Container>
            <div style={{ padding: "40px" }}>{children}</div>
        </Container>
    );
};
