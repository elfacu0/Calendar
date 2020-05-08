import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import Event from './Event';
import CreateEvent from './CreateEvent';

const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    background: ${(props) => (props.today ? '#00D0C0' : '')};
    &:hover {
        border: 1px solid white;
        cursor: pointer;
        backdrop-filter: brightness(1.6);
    }
`;

const DayWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const EventsContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Evento = styled.div`
    width: 15%;
    height: 50%;
    background: ${(props) => props.color || 'red'};
`;

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

function splitDate(date) {
    let splitedDate = date.split('-');
    const splitedDay = splitedDate[2].slice(0, 2);
    splitedDate[2] = splitedDay;
    date = splitedDate.map((e) => parseInt(e));
    return date;
}

const DayContainer = (props) => {
    const { year, month, day, TODAY } = props;
    const [show, setShow] = useState(false);
    const allEvents = props.allEvents;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Day
                today={`${year}-${month}-${day}` === TODAY}
                onClick={handleShow}
            >
                <DayWrapper>
                    <span>{day || ''}</span>
                </DayWrapper>
                {day && (
                    <EventsContainer>
                        {allEvents.map((event) => {
                            let startDate = splitDate(event.start);
                            let endDate = splitDate(event.end);
                            if (
                                year >= startDate[0] &&
                                year <= endDate[0] &&
                                month >= startDate[1] &&
                                month <= endDate[1] &&
                                day + month * 40 >=
                                    startDate[2] + startDate[1] * 40 &&
                                day + month * 40 <= endDate[2] + endDate[1] * 40
                            ) {
                                return (
                                    <Evento
                                        key={event._id}
                                        color={event.color}
                                    />
                                );
                            }
                            return '';
                        })}
                    </EventsContainer>
                )}
            </Day>
            {day && (
                <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    dialogClassName=" public-profile-modal-class"
                    className="special_modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {day}-{monthNames[month - 1]}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            {allEvents.map((event) => {
                                let startDate = splitDate(event.start);
                                let endDate = splitDate(event.end);
                                if (
                                    year >= startDate[0] &&
                                    year <= endDate[0] &&
                                    month >= startDate[1] &&
                                    month <= endDate[1] &&
                                    day + month * 40 >=
                                        startDate[2] + startDate[1] * 40 &&
                                    day + month * 40 <=
                                        endDate[2] + endDate[1] * 40
                                ) {
                                    return (
                                        <Carousel.Item key={event._id}>
                                            <Event
                                                user={props.user}
                                                event={event}
                                                getEvents={props.getEvents}
                                            />
                                        </Carousel.Item>
                                    );
                                }
                                return '';
                            })}
                            <Carousel.Item>
                                <CreateEvent
                                    year={year}
                                    month={month}
                                    day={day}
                                    getEvents={props.getEvents}
                                    user={props.user}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};
export default DayContainer;
