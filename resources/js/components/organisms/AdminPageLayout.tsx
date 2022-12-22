import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavAdmin } from "../molecules/NavAdmin";

export const AdminPageLayout = () => {
    return (
        <div>
            <NavAdmin />
            <Container className="py-4">
                <Outlet />
            </Container>
        </div>
    );
};
