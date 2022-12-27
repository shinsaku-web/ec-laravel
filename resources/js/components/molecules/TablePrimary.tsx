import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

interface Props {
    users: {
        id: number;
        name: string;
        email: string;
        created: string;
    }[];
}

export const TablePrimary = ({ users }: Props) => {
    const navigate = useNavigate();
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
                        <td>{user.created}</td>
                        <td width={100} className="text-center">
                            <Button
                                onClick={() =>
                                    navigate(`/admin/update-owner/${1}`)
                                }
                                variant="outline-primary"
                            >
                                編集
                            </Button>
                        </td>
                        <td width={100} className="text-center">
                            <Button variant="danger">削除</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
