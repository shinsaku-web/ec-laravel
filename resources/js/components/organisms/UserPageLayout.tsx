import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { NavUser } from "../molecules/NavUser";

interface Props {
    children: ReactNode;
}

export const UserPageLayout = ({ children }: Props) => {
    return (
        <div>
            <NavUser />
            <Container className="py-4">{children}</Container>
        </div>
    );
};
