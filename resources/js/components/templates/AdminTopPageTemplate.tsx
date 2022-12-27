import { useOwner } from "../../hooks/useOwner";
import { TablePrimary } from "../molecules/TablePrimary";

export const AdminTopPageTemplate = () => {
    const { owners } = useOwner();

    return (
        <div>
            <h3 className="mt-4 mb-4">管理者トップページ</h3>
            <h4 className="pt-4 mb-4">オーナー一覧</h4>
            <TablePrimary users={owners} />
        </div>
    );
};
