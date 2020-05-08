import * as calendar from '../calendar';
let _id = 0;
const event = {
    created: '2020-04-26T22:39:50.984Z',
    updated: '2020-04-26T22:39:50.984Z',
    summary: 'Evento 1',
    description: 'Descripción prolongada del evento 1',
    color: '#F00',
    start: '2020-04-26T22:43:52.214Z',
    end: '2020-04-26T23:43:52.214Z',
    attendees: [],
};
const creator = {
    email: 'test@test.com',
    displayName: 'Test Test',
};

let attendee = {
    email: 'attende@gmail.com',
    displayName: 'attende',
    responseStatus: true,
};

it('should get all the events', async () => {
    const data = await calendar.getEvents();
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThanOrEqual(1);
});

it('should add one event', async () => {
    const data = await calendar.addEvent({ ...creator, ...event });
    expect(data._id).toBeDefined();
    _id = data._id;
});

it('should add attendant', async () => {
    const data = await calendar.addAttendee({ _id, attendee });
    expect(data.nModified).toBe(1);
});

it('should change attendant response', async () => {
    attendee = {
        email: 'attende@gmail.com',
        displayName: 'attende',
        responseStatus: false,
    };
    const data = await calendar.changeAttendeeResponse({ _id, attendee });
    expect(data._id).toBe(_id);
});

it('should modify event', async () => {
    const changes = {
        newDescription: 'New description',
        newSummary: 'newSummary',
    };
    const data = await calendar.modifyEvent({ _id, ...changes });
    expect(data.nModified).toBe(1);
});

it('should delete event', async () => {
    const data = await calendar.deleteEvent(_id);
    expect(data.deletedCount).toBe(1);
});
