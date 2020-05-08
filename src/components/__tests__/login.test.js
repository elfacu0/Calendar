import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Login from '../Login';
import { shallow, mount } from 'enzyme';

let container = null;

afterEach(cleanup);
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
});

it('test Login with no data (fail)', () => {
    const setUser = jest.fn();
    const wrapper = mount(<Login setUser={setUser} />);
    expect(wrapper.find('input').length).toBeGreaterThanOrEqual(2);
    wrapper.find('button').simulate('click');
    expect(setUser).toBeCalledTimes(0);
});

it('test sucessful Login', () => {
    const setUser = jest.fn();
    const wrapper = mount(<Login setUser={setUser} />);

    const userInput = wrapper.find('input').at(0);
    userInput.instance().value = 'User';
    userInput.simulate('change');
    expect(userInput.instance().value).toBe('User');

    const emailInput = wrapper.find('input').at(1);
    emailInput.instance().value = 'email@gmail.com';
    emailInput.simulate('change');
    expect(emailInput.instance().value).toBe('email@gmail.com');

    wrapper.find('form').simulate('submit');
    expect(setUser).toBeCalledTimes(1);
});
