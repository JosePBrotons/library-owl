import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '.';
import { arrUpTo } from '../../../utils';

test('renders dropdown component correctly', () => {
    const props = {
        options: arrUpTo(18, 82),
        optionsDescription: 'Years',
        label: 'Age',
        selectedValue: '18 years',
        fieldName: 'age',
        select: jest.fn,
    };
    const dropdownCmp = renderer.create(<Dropdown {...props} />).toJSON();
    expect(dropdownCmp).toMatchSnapshot();
});
