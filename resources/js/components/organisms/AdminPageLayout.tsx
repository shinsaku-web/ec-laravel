import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NavAdmin } from "../molecules/NavAdmin";
import { Loading } from "./Loading";

export const AdminPageLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {
        admin: { id },
    } = useAuth("admin");
    const navigate = useNavigate();

    useEffect(() => {
        const timerID = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        return () => clearTimeout(timerID);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (id === null) {
        navigate("/admin/login");
    }
    return (
        <div>
            <NavAdmin />
            <Container className="py-4">
                <Outlet />
            </Container>
        </div>
    );
};
