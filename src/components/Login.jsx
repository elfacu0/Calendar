import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    color: white;
    background: #222331;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
`;
let name = '';
let email = '';

const Login = (props) => {
    return (
        <Wrapper>
            <Form>
                Name:
                <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                        name = e.target.value;
                    }}
                />
                Email:
                <input
                    type="text"
                    name="Email"
                    onChange={(e) => {
                        email = e.target.value;
                    }}
                />
                <button
                    type="submit"
                    value="Submit"
                    onClick={() => {
                        localStorage.setItem('user', { name, email });
                        props.setUser({ name, email });
                    }}
                >
                    Submit
                </button>
            </Form>
        </Wrapper>
    );
};
export default Login;
