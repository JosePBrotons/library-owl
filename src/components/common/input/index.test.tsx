import React from 'react';
import renderer from 'react-test-renderer';
import Input from '.';
import { COLORS } from './../../../constants';

test('renders input component correctly', () => {
    const props = {
        placeholder: 'Email',
        value: 'me@josepbrotons.com',
        placeholderTextColor: COLORS.lightGray,
        onChangeText: jest.fn,
        iconName: 'email',
    };
    const inputCmp = renderer.create(<Input {...props} />).toJSON();
    expect(inputCmp).toMatchSnapshot();
});
