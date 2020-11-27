import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '.';

test('renders input component correctly', () => {
    const props = {
        checked: false,
        description: 'I agree with the terms and conditions',
        onPress: jest.fn,
    };
    const inputCmp = renderer.create(<Checkbox {...props} />).toJSON();
    expect(inputCmp).toMatchSnapshot();
});
