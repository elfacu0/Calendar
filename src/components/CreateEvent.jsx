import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import { addEvent } from '../api/calendar';

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

const CreateEvent = (props) => {
    let { year, month, day } = props;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    const start = `${year}-${month}-${day}`;
    const [summary, setSummary] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [end, setEndDate] = useState(new Date(start));
    const { name, email } = props.user;

    const creator = {
        id: 10,
        email: email,
        displayName: name,
        self: true,
    };

    const sendForm = async (e) => {
        e.preventDefault();
        await addEvent({
            summary,
            creator,
            color,
            description,
            end: end,
            start: new Date(start),
        });
        props.getEvents();
    };

    return (
        <Wrapper>
            <Container>
                <h1>Create New Event</h1>
                <Form onSubmit={sendForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control
                                required
                                placeholder="Evento 2"
                                onChange={(e) => setSummary(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                placeholder="#FF00FF"
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            placeholder="Viernes de la jungla"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>End Date</Form.Label>
                        <br></br>
                        <input
                            type="date"
                            min={start}
                            value={start}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </Wrapper>
    );
};
export default CreateEvent;
