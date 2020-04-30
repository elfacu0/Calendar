import React, { useState } from 'react';
import styled from '@emotion/styled';
import Calendar from './components/Calendar';
import AllEvents from './components/AllEvents';
// import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
// import { CacheProvider } from '../CacheContext';
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
            {/* <Calendar></Calendar> */}
            <AllEvents />
        </Wrapper>
    );
}

export default App;
