import React from 'react';
import styled from '@emotion/styled';
import Calendar from './components/Calendar';
// import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
// import { CacheProvider } from '../CacheContext';
const Wrapper = styled.div`
    min-height: 100vh;
    background: #222331;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Header = styled.div`
    width: 100%;
    background: #262154;
    display: flex;
    padding: 1em;
    box-sizing: border-box;
`;

const Layout = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
    return (
        <Wrapper>
            <Calendar></Calendar>
        </Wrapper>
    );
}

export default App;
