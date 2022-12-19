import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavOwner } from "../molecules/NavOwner";

export const OwnerPageLayout = () => {
    return (
        <div>
            <NavOwner />
            <Container className="py-4">
                <Outlet />
            </Container>
        </div>
    );
};
