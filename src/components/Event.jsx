import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import {
    addAttendee,
    changeAttendeeResponse,
    deleteEvent,
    modifyEvent,
} from '../api/calendar';

const Wrapper = styled.div`
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Container = styled.div`
    color: white;
    max-width: 400px;
    background: #23232b;
    padding: 20px;
    border-radius = 10px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Divisor = styled.hr`
    width: 100%;
    border-top: 2px solid #ffffff;
    margin-top: 8px;
    margin-bottom: 8px;
`;

const EventTitle = styled.div``;
const Creator = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Duration = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Description = styled.div`
    width: 70%;
`;

const User = styled.div`
    background: #6c757d;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

const Attendees = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const P = styled.p`
    margin-bottom: 2px;
`;

const Attendance = styled.div``;
const { name, email } = JSON.parse(localStorage.getItem('user'));

const Event = (props) => {
    const {
        summary,
        created,
        updated,
        start,
        end,
        description,
        color,
        _id,
    } = props.event;
    const { creator, attendees } = props.event;

    const [isModifying, setIsModifying] = useState(false);
    const [newSummary, setNewSummary] = useState(summary);
    const [newDescription, setNewDescription] = useState(description);
    const [newStartDate, setNewStartDate] = useState(`${start.slice(0, 10)}`);
    const [newEndDate, setNewEndDate] = useState(`${end.slice(0, 10)}`);

    const saveChanges = async () => {
        await modifyEvent({
            _id,
            newSummary,
            newDescription,
            newStartDate,
            newEndDate,
        });
        props.getEvents();
    };

    const updateAttendance = async (res, _id) => {
        const attendee = {
            id: 1,
            email: email,
            displayName: name,
            organizer: false,
            self: true,
            responseStatus: res,
        };
        const updated = await changeAttendeeResponse({
            _id,
            attendee,
        });
        if (!updated) {
            await addAttendee({ _id, attendee });
        }
        props.getEvents();
    };

    return (
        <Wrapper>
            <Container background={false && color}>
                <EventTitle>
                    {isModifying === true ? (
                        <Form.Group as={Col} controlId="newSumarry">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                required
                                placeholder="Summary"
                                value={newSummary}
                                onChange={(e) => setNewSummary(e.target.value)}
                            />
                        </Form.Group>
                    ) : (
                        <h2>{summary}</h2>
                    )}

                    {email === creator.email && (
                        <Button
                            variant="danger"
                            onClick={async () => {
                                await deleteEvent(_id);
                                props.getEvents();
                            }}
                        >
                            DELETE
                        </Button>
                    )}
                    {email === creator.email && (
                        <Button
                            variant="secondary"
                            onClick={() => {
                                setIsModifying(true);
                            }}
                        >
                            MODIFY
                        </Button>
                    )}
                    {isModifying === true && (
                        <Button
                            variant="success"
                            onClick={() => {
                                setIsModifying(false);
                                saveChanges();
                            }}
                        >
                            SAVE
                        </Button>
                    )}
                </EventTitle>
                <Divisor />
                <Creator>
                    <h3>Creator</h3>
                    <User>
                        <P>{creator.displayName}</P>
                        <P>{creator.email}</P>
                    </User>
                </Creator>

                <Divisor />
                <Duration>
                    {isModifying === true ? (
                        <div>
                            <label>New Start Date</label>
                            <br></br>
                            <input
                                type="date"
                                onChange={(e) =>
                                    setNewStartDate(e.target.value)
                                }
                                value={newStartDate}
                            />
                        </div>
                    ) : (
                        <P>Start: {start.slice(0, 10)}</P>
                    )}
                    {isModifying === true ? (
                        <div>
                            <label>New End Date</label>
                            <br></br>
                            <input
                                type="date"
                                min={newStartDate}
                                onChange={(e) => setNewEndDate(e.target.value)}
                                value={newEndDate}
                            />
                        </div>
                    ) : (
                        <P>End: {end.slice(0, 10)}</P>
                    )}
                    <P>created: {created.slice(0, 10)}</P>
                    <P>Updated: {updated.slice(0, 10)}</P>
                </Duration>
                <Divisor />
                <Description>
                    <h3>Description</h3>

                    {isModifying === true ? (
                        <Form.Group as={Col} controlId="newDescription">
                            <Form.Control
                                required
                                placeholder="Description"
                                value={newDescription}
                                onChange={(e) =>
                                    setNewDescription(e.target.value)
                                }
                            />
                        </Form.Group>
                    ) : (
                        <P>{description}</P>
                    )}
                </Description>
                <Divisor />
                <h3>Attendees</h3>
                <Attendees>
                    {attendees.map((attendee) => {
                        return (
                            <User key={attendee.displayName}>
                                <P>{attendee.displayName}</P>
                                <P>{attendee.email}</P>
                                <P>
                                    Response:{' '}
                                    {attendee.responseStatus
                                        ? 'Positive'
                                        : attendee.responseStatus === null
                                        ? 'N/a'
                                        : 'Negative'}
                                </P>
                            </User>
                        );
                    })}
                </Attendees>
                <Divisor />
                <Attendance>
                    <h3>Attendance</h3>
                    <Button
                        variant="success"
                        onClick={() => {
                            updateAttendance(true, _id);
                        }}
                    >
                        Yes
                    </Button>{' '}
                    <Button
                        variant="secondary"
                        onClick={() => {
                            updateAttendance(null, _id);
                        }}
                    >
                        N/a
                    </Button>{' '}
                    <Button
                        variant="danger"
                        onClick={() => {
                            updateAttendance(false, _id);
                        }}
                    >
                        No
                    </Button>{' '}
                </Attendance>
            </Container>
        </Wrapper>
    );
};
export default Event;
