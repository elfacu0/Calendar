import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import moment from 'moment';
import DayContainer from './DayContainer';
import { getEvents } from '../api/calendar';

const Container = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.div`
    width: 100%;
    margin-bottom: 2vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ChangeMonth = styled.img`
    width: 8%;
    cursor: pointer;
    transition-property: -moz-filter, -ms-filter, -o-filter, -webkit-filter,
        filter;
    transition-duration: 0.4s;
    ${(props) => (props.previous ? 'transform:rotate(180deg)' : '')};
    &:hover {
        filter: brightness(1.7);
    }
`;

const Wrapper = styled.div`
    height: 80%;
    width: 80%;
    background: #222331;
    color: white;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto;
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
    const [allEvents, setAllEvents] = useState([]);
    const [showFetchError, setShowFetchError] = useState(false);

    async function getData() {
        try {
            const data = await getEvents();
            setAllEvents(data);
            setShowFetchError(false);
            console.log('GETTING DATA FROM CALENDAR');
        } catch (err) {
            console.log(err);
            setShowFetchError(true);
        }
    }

    useEffect(() => {
        setDaysInMonth(changeMonth(year, month));
        getData();
    }, []);

    let weekdayshort = moment.weekdaysShort();
    return (
        <Container>
            {showFetchError && (
                <Alert
                    variant="danger"
                    onClose={() => setShowFetchError(false)}
                    dismissible
                >
                    <Alert.Heading>API ERROR</Alert.Heading>
                    <p>Failed to connect to api</p>
                </Alert>
            )}
            <Header>
                <ChangeMonth
                    onClick={() => {
                        month -= 1;
                        if (month <= 0) {
                            year--;
                            month = 12;
                        }
                        setDaysInMonth(changeMonth(year, month));
                    }}
                    previous={true}
                    src="https://image.flaticon.com/icons/svg/137/137517.svg"
                />
                <h1>
                    {monthName[month - 1]}-{year}
                </h1>
                <ChangeMonth
                    onClick={() => {
                        month += 1;
                        if (month > 12) {
                            year++;
                            month = 1;
                        }
                        setDaysInMonth(changeMonth(year, month));
                    }}
                    src="https://image.flaticon.com/icons/svg/137/137517.svg"
                />
            </Header>
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
                            allEvents={allEvents}
                            getEvents={getData}
                            key={day || i * -1}
                        />
                    );
                })}
            </Wrapper>
        </Container>
    );
};
export default Calendar;
