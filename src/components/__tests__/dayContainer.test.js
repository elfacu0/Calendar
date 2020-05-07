import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DayContainer from '../DayContainer';

let wrapper;

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DayContainer />, div);
});

it('should show 2 with no events', () => {
    wrapper = mount(
        <DayContainer year={2020} month={6} day={2} allEvents={[]} />
    );
    const actualDay = wrapper.find('.css-17d5bfc').text();
    expect(actualDay).toBe('2');
    const eventWrapper = '.css-94tvv2';
    expect(wrapper.find(eventWrapper).exists()).toBeFalsy();
});

it('should show 5 with 1 event', () => {
    const startDate = '2020-01-01';
    const endDate = '2020-12-12';
    wrapper = mount(
        <DayContainer
            year={2020}
            month={6}
            day={5}
            allEvents={[
                { start: startDate, end: endDate, _id: '3', color: '#FF00FF' },
            ]}
        />
    );
    const actualDay = wrapper.find('.css-17d5bfc').text();
    expect(actualDay).toBe('5');
    const eventWrapper = '.css-94tvv2';
    expect(wrapper.find(eventWrapper).exists()).toBeTruthy();
});
