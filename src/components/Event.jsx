import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';

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
    background: #444444;
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
    margin-bottom: 8px;
`;

const Attendance = styled.div``;

const Event = (props) => {
    console.log(props.event);
    const { summary, created, updated, start, end, description } = props.event;
    const { displayName, email } = props.event.creator;
    const { attendees } = props.event;
    return (
        <Wrapper>
            <Container>
                <EventTitle>
                    <h2>{summary}</h2>
                </EventTitle>
                <Divisor />
                <Creator>
                    <h3>Creator</h3>
                    <User>
                        <P>{displayName}</P>
                        <P>{email}</P>
                    </User>
                </Creator>

                <Divisor />
                <Duration>
                    <P>Start: {start.slice(0, 10)}</P>
                    <P>End: {end.slice(0, 10)}</P>
                    <P>created: {created.slice(0, 10)}</P>
                    <P>Updated: {updated.slice(0, 10)}</P>
                </Duration>
                <Divisor />
                <Description>
                    <h3>Description</h3>
                    <P>{description}</P>
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
                    <Button variant="success">Yes</Button>{' '}
                    <Button variant="secondary">N/a</Button>{' '}
                    <Button variant="danger">No</Button>{' '}
                </Attendance>
            </Container>
        </Wrapper>
    );
};
export default Event;
