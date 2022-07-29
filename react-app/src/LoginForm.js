import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import UserContext from "./context/UserContext";
import {Form, Button, Row, Col} from "react-bootstrap";

export default function LoginForm({setUser}) {
    const navigate = useNavigate();
    //const user = useContext(UserContext);
    const [email, setEmail] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        console.log(email);
        // const OUR_DB_URL = `http://localhost:3001/users/${email}`;
        const response = await fetch(
            `${process.env.REACT_APP_OUR_DB_URL}users/${email}`
        );
        const data = await response.json();
        console.log(data);
        if (data) {
            setUser({username: data.email, isAuthenticated: true});
            navigate(`/userprofile`);
        } else {
            navigate(`/`);
        }
    };

    return (
        <Row className="justify-content-md-center">
            <Col xs={6}>
                <Form onSubmit={loginUser}>
                    <h2 className="center"> SQLDaddy Bookclub</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            id="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                                console.log(email);
                            }}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}