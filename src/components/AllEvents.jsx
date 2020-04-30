import React from 'react';
import styled from '@emotion/styled';
import { changeMonth } from './Calendar';

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

const Day = styled.div`
    border: 2px solid #ffddff;
    border-left: 0px;
    border-right: 0px;
    width: 100%;
    height: 150px;
`;
const DayHeader = styled.div`
    height: 30%;
`;
const DayEvents = styled.div`
    height: 70%;
`;
const Event = styled.img`
    height: 70px;
    width: 70px;
`;

const date = new Date();
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

let year = date.getFullYear();
let month = date.getMonth();
let daysInMonth = changeMonth(year, month + 1);
console.log(daysInMonth);

const AllEvents = () => {
    return (
        <Wrapper>
            <h2>{monthNames[month]}</h2>
            <Container>
                {daysInMonth.map((day, i) => {
                    if (day) {
                        return (
                            <Day key={day}>
                                <DayHeader>
                                    {dayNames[i % 7]} - {day}
                                </DayHeader>
                                <DayEvents>
                                    <Event src="https://image.flaticon.com/icons/png/512/2829/2829971.png" />
                                </DayEvents>
                            </Day>
                        );
                    } else {
                        return '';
                    }
                })}
            </Container>
        </Wrapper>
    );
};
export default AllEvents;
