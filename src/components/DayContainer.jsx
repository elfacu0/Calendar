import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import index from '../data/index.json';
import Event from './Event';

const Day = styled.div`
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
    // visibility: hidden;
    align-items: center;
    justify-content: center;
`;

const Evento = styled.div`
    width: 15%;
    height: 50%;
    background: red;
`;

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
                        {index.map((event) => {
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
                                return <Evento key={event.start} />;
                            }
                            return '';
                        })}
                    </EventsContainer>
                )}
            </Day>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                dialogClassName=" public-profile-modal-class"
                className="special_modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{day}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {index.map((event) => {
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
                                    <Carousel.Item key={event.start}>
                                        <Event event={event} />
                                    </Carousel.Item>
                                );
                            }
                            return '';
                        })}
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default DayContainer;
