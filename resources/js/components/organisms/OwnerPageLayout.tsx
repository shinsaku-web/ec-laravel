import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NavOwner } from "../molecules/NavOwner";
import { Loading } from "./Loading";

export const OwnerPageLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {
        owner: { id },
    } = useAuth("owner");
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
        navigate("/owner/login");
    }

    return (
        <div>
            <NavOwner />
            <Container className="py-4">
                <Outlet />
            </Container>
        </div>
    );
};
