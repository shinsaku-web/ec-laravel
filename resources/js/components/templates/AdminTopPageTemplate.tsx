import { useOwner } from "../../hooks/useOwner";
import { TableUserList } from "../molecules/TableUserList";

export const AdminTopPageTemplate = () => {
    const { owners } = useOwner();
    console.log(owners);

    return (
        <div>
            <h3 className="mt-4 mb-4">管理者トップページ</h3>
            <h4 className="pt-4 mb-4">オーナー一覧</h4>
            <TableUserList users={owners} />
        </div>
    );
};
