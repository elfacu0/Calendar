import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CreateEvent from '../CreateEvent';
import { shallow, mount } from 'enzyme';

afterEach(cleanup);
it('renders without crashing', () => {
    const getEvents = jest.fn();
    const dataFake = { name: 'User', email: 'K@gmail.com' };
    const div = document.createElement('div');
    ReactDOM.render(<CreateEvent user={dataFake} getEvents={getEvents} />, div);
});

it('test createEvent with no data (fail)', () => {
    const mockGetEvents = false;
    const mockOnSubmit = { preventDefault: jest.fn() };
    const dataFake = { name: 'User', email: 'K@gmail.com' };
    const wrapper = mount(
        <CreateEvent user={dataFake} getEvents={mockGetEvents} />
    );
    expect(wrapper.find('input').length).toBeGreaterThanOrEqual(4);
    wrapper.find('button').simulate('click');
    expect(mockOnSubmit.preventDefault).toBeCalledTimes(0);
});

it('test sucessful createEvent', () => {
    const mockGetEvents = false;
    const mockOnSubmit = { preventDefault: jest.fn() };
    const dataFake = { name: 'User', email: 'K@gmail.com' };
    const wrapper = mount(
        <CreateEvent user={dataFake} getEvents={mockGetEvents} />
    );
    expect(wrapper.find('form')).toHaveLength(1);

    const summaryInput = wrapper.find('#formSummary');
    summaryInput.value = 'User';
    summaryInput.simulate('change');
    expect(summaryInput.value).toBe('User');

    const descriptionInput = wrapper.find('#formDescription');
    descriptionInput.value = 'aodlsadas';
    descriptionInput.simulate('change');
    expect(descriptionInput.value).toBe('aodlsadas');

    wrapper.find('form').simulate('submit', mockOnSubmit);
    expect(mockOnSubmit.preventDefault).toBeCalledTimes(1);
});
