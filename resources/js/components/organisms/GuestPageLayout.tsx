import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { NavGuest } from "../molecules/NavGuest";

interface Props {
    children: ReactNode;
}

/**
 *
 * ログインしていない（ゲスト用）ページ
 */
/** */
export const GuestPageLayout = ({ children }: Props) => {
    return (
        <div>
            <NavGuest />
            <Container className="py-4">{children}</Container>
        </div>
    );
};
