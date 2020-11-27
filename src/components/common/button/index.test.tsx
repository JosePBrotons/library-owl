import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

test('renders button component correctly', () => {
    const props = {
        text: 'Sign In',
        disabled: false,
        onPress: jest.fn
    };
    const btnCmp = renderer.create(<Button {...props} />).toJSON();
    expect(btnCmp).toMatchSnapshot();
});
