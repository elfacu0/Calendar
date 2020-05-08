import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calendar from '../Calendar';

let wrapper;

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calendar />, div);
});

it('renders basic calendar without components', () => {
    const calendar = renderer.create(<Calendar />);
    let tree = calendar.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should change month', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);
    wrapper = mount(<Calendar />);
    const previousButton = wrapper.find('img').at(0);

    const nextMonth = wrapper.find('h1').text();
    expect(setState).toHaveBeenCalledTimes(30);

    previousButton.simulate('click');
    expect(setState).toHaveBeenCalledTimes(60);
    const actualMonth = wrapper.find('h1').text();
    expect(actualMonth).not.toBe(nextMonth);
});
