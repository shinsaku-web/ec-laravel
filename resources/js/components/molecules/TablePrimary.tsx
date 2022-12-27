import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

export const TablePrimary = () => {
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
                {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i}>
                        <td>{i}</td>
                        <td>Mark</td>
                        <td>test@test.com</td>
                        <td>4ヶ月前</td>
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
