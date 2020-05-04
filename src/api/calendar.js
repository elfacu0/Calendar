const BASE_URL = 'https://evening-springs-90377.herokuapp.com';

export async function addEvent(props) {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...props }),
    };
    const response = await fetch(`${BASE_URL}/addEvent`, requestOptions);
    const data = await response.json();
    return data;
}

export async function getEvents() {
    const response = await fetch(`${BASE_URL}/getEvents`);
    const data = await response.json();
    return data;
}

export async function deleteEvent(id) {
    const requestOptions = {
        method: 'DELETE',
    };
    const response = await fetch(
        `${BASE_URL}/deleteEvent/${id}`,
        requestOptions
    );
    const data = await response.json();
    return data;
}

export async function addAttendee(props) {
    const { _id, attendee } = props;
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attendee),
    };
    const response = await fetch(
        `${BASE_URL}/addAttendee/${_id}`,
        requestOptions
    );
    const data = await response.json();
    return data;
}

export async function changeAttendeeResponse(props) {
    const { _id, attendee } = props;
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attendee),
    };
    const response = await fetch(
        `${BASE_URL}/updateResponseStatus/${_id}`,
        requestOptions
    );
    const data = await response.json();
    return data;
}

export async function modifyEvent(props) {
    const { _id, newDescription, newSummary, newStartDate, newEndDate } = props;

    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            newDescription,
            newSummary,
            newStartDate,
            newEndDate,
        }),
    };
    const response = await fetch(
        `${BASE_URL}/modifyEvent/${_id}`,
        requestOptions
    );
    const data = await response.json();
    return data;
}
