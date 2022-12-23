import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { NavGuest } from "../molecules/NavGuest";
import { NavOwnerGuest } from "../molecules/NavOwnerGuest";

interface Props {
    children: ReactNode;
    guestType: "user" | "owner";
}

/**
 *
 * ログインしていない（ゲスト用）ページ
 */
/** */
export const GuestPageLayout = ({ children, guestType = "user" }: Props) => {
    if (guestType === "owner") {
        return (
            <div>
                <NavOwnerGuest />
                <Container className="py-4">{children}</Container>
            </div>
        );
    }
    return (
        <div>
            <NavGuest />
            <Container className="py-4">{children}</Container>
        </div>
    );
};
