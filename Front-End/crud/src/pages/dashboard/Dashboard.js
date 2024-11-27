import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        const fetchEmployers = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/employers");
                const data = await response.json();
                setEmployers(data);
            } catch (error) {
                console.log("Error fetching employers:", error.message);
            }
        };
        fetchEmployers();
    }, []);

    const handleDelete = async (employerID) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employer/${employerID}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setEmployers((prevEmployers) => {
                    return prevEmployers.filter((employer) => employer.id !== employerID);
                });
                console.log(`Employer with ID ${employerID} deleted successfully`);
            }
        } catch (error) {
            console.error("Error deleting employer:", error.message);
        }
    };

    const handleUpdate = (employerId) =>{
        navigate(`/employer/${employerId}`);

    }

    return (
        <>
            <br />
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Employers List</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Departement</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employers && employers.length > 0 ? (
                                    employers.map((employer) => (
                                        <tr key={employer.id}>
                                            <td>{employer.name}</td>
                                            <td>{employer.email}</td>
                                            <td>{employer.phone}</td>
                                            <td>{employer.departement}</td>
                                            <td>
                                                <Button variant="outline-warning" onClick={() => handleUpdate(employer.id)}>Update</Button>{" "}
                                                <Button
                                                    variant="outline-danger"
                                                    onClick={() => handleDelete(employer.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            No employers found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
