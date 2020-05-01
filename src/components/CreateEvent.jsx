import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    color: white;
    background: #222331;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    height: 90%;
    width: 80vw;
    color: white;
    background: #222331;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const CreateEvent = () => {
    return (
        <Wrapper>
            <Container></Container>
        </Wrapper>
    );
};
export default CreateEvent;
