import React, { useState } from 'react';
import styled from '@emotion/styled';
import Calendar from './components/Calendar';
import Login from './components/Login';
const Wrapper = styled.div`
    min-height: 100vh;
    background: #222331;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

function App() {
    const [user, setUser] = useState(localStorage.getItem('user'));
    if (!user) {
        return <Login setUser={setUser} />;
    }
    return (
        <Wrapper>
            <Calendar user={JSON.parse(user)} />
        </Wrapper>
    );
}

export default App;
