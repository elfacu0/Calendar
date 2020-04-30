import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import DayContainer from './DayContainer';

const Container = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Wrapper = styled.div`
    height: 80%;
    width: 80%;
    background: #222331;
    color: white;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto;
`;

const Controllers = styled.div`
    width: 80%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ChangeMonth = styled.button`
    width: 10%;
    height: 100%;
`;

const DayName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    background: ${(props) => (props.today === true ? '#296d98' : '')};
    &:hover {
        border: 1px solid white;
        cursor: pointer;
    }
`;

const date = new Date();
const monthName = [
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
let year = date.getFullYear();
let month = date.getMonth() + 1;
const TODAY = `${year}-${month}-${date.getDate()}`;

export function changeMonth(year, month) {
    let daysInMonth = [];
    function getFirstDayOfMonth() {
        let firstDay = moment(`${year}-${month}`, 'YYYY-MM')
            .startOf('month')
            .format('d');
        return Number(firstDay);
    }

    function getCantDaysInMonth() {
        return Number(moment(`${year}-${month}`, 'YYYY-MM').daysInMonth());
    }

    let firstDayOfMonth = getFirstDayOfMonth(year, month);
    let CantDaysInMonth = getCantDaysInMonth(year, month);
    console.log(firstDayOfMonth, CantDaysInMonth);

    for (let i = 0; i < 35; i++) {
        if (i < firstDayOfMonth || i - firstDayOfMonth + 1 > CantDaysInMonth) {
            daysInMonth.push('');
            continue;
        }
        daysInMonth.push(i - firstDayOfMonth + 1);
    }
    return daysInMonth;
}

const Calendar = () => {
    const [daysInMonth, setDaysInMonth] = useState(changeMonth());
    useEffect(() => {
        setDaysInMonth(changeMonth(year, month));
    }, []);

    let weekdayshort = moment.weekdaysShort();
    return (
        <Container>
            <Controllers>
                <ChangeMonth
                    onClick={() => {
                        month -= 1;
                        if (month <= 0) {
                            year--;
                            month = 12;
                        }
                        setDaysInMonth(changeMonth(year, month));
                    }}
                >
                    Previous
                </ChangeMonth>
                <ChangeMonth
                    onClick={() => {
                        month += 1;
                        if (month > 12) {
                            year++;
                            month = 1;
                        }
                        setDaysInMonth(changeMonth(year, month));
                    }}
                >
                    Next
                </ChangeMonth>
            </Controllers>
            <h1>
                {monthName[month - 1]}-{year}
            </h1>
            <Wrapper>
                {weekdayshort.map((day) => {
                    return <DayName key={day}>{day}</DayName>;
                })}
                {daysInMonth.map((day, i) => {
                    return (
                        <DayContainer
                            year={year}
                            month={month}
                            day={day}
                            TODAY={TODAY}
                            key={day || i * -1}
                        />
                    );
                })}
            </Wrapper>
        </Container>
    );
};
export default Calendar;
