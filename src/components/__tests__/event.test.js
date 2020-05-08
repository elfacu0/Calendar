import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Event from '../Event';
import { mount } from 'enzyme';
import * as m from '../../api/calendar';

const mockEvent = {
    _id: '5eadf6600d2ba13bf40447e4',
    color: '',
    summary: 'asdsa',
    creator: {
        id: 10,
        email: 'test@test.com',
        displayName: 'Test',
    },
    description: 'asdasd',
    end: '2020-02-03',
    start: '2020-02-03',
    created: '2020-05-05',
    updated: '2020-05-05',
    attendees: [],
};

const user = {
    name: 'k',
    email: 'banano@gmail.com',
};

afterEach(cleanup);
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Event user={user} event={mockEvent} />, div);
});

it('should show 3 buttons', () => {
    const mockGetEvents = false;
    const dataFake = { name: 'User', email: 'K@gmail.com' };
    const wrapper = mount(
        <Event user={dataFake} event={mockEvent} getEvents={mockGetEvents} />
    );
    expect(wrapper.find('button').length).toBe(3);
});

it('should show 3 buttons + modify and delete (5 in total) ', () => {
    const mockGetEvents = false;
    const mockOnSubmit = { preventDefault: jest.fn() };
    const dataFake = { name: 'Test', email: 'test@test.com' };
    const wrapper = mount(
        <Event user={dataFake} event={mockEvent} getEvents={mockGetEvents} />
    );
    expect(wrapper.find('button').length).toBe(5);
});

it('should show summary', () => {
    const mockGetEvents = false;
    const dataFake = { name: 'User', email: 'K@gmail.com' };
    const wrapper = mount(
        <Event user={dataFake} event={mockEvent} getEvents={mockGetEvents} />
    );
    expect(wrapper.find('h2').text()).toBe(mockEvent.summary);
});

it('should show update attendance', () => {
    m.changeAttendeeResponse = jest.fn();
    const mock = jest.fn();
    const initProps = {
        user: user,
        event: mockEvent,
        getEvents: mock,
    };

    let wrapper = mount(<Event {...initProps} />);
    wrapper.find('button').at(2).simulate('click');
    expect(m.changeAttendeeResponse).toHaveBeenCalledTimes(1);
});
