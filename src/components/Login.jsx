import React from 'react';
import styled from '@emotion/styled';
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    color: white;
    background: #222331;
    display: flex;
    justify-content: center;
    align-items: center;
`;

let name = '';
let email = '';

const Login = (props) => {
    return (
        <Wrapper>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    localStorage.setItem(
                        'user',
                        JSON.stringify({ name: name, email: email })
                    );
                    props.setUser({ name, email });
                }}
            >
                <Form.Group as={Col} controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={(e) => {
                            name = e.target.value;
                        }}
                        required
                        type="text"
                        placeholder="Name"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={(e) => {
                            email = e.target.value;
                        }}
                        required
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formSubmit">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </Wrapper>
    );
};
export default Login;
