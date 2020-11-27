import React from 'react';
import renderer from 'react-test-renderer';
import Login from '.';

test('renders login component correctly', () => {
    const loginCmp = renderer.create(<Login />).toJSON();
    expect(loginCmp).toMatchSnapshot();
});
