import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../types/user";

interface Props {
    users: UserInfo[];
    handleDelete: (id: number) => void;
}

export const TableUserList = ({ users, handleDelete }: Props) => {
    const navigate = useNavigate();
    const handleClickDelete = (id: number | null) => {
        if (id) {
            handleDelete(id);
        }
    };
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                        <td width={100} className="text-center">
                            <Button
                                onClick={() =>
                                    navigate(`/admin/update-owner/${user.id}`)
                                }
                                variant="outline-primary"
                            >
                                編集
                            </Button>
                        </td>
                        <td width={100} className="text-center">
                            <Button
                                onClick={() => handleClickDelete(user.id)}
                                variant="danger"
                            >
                                削除
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
