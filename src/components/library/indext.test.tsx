import React from 'react';
import renderer from 'react-test-renderer';
import Library from '.';

test('renders login component correctly', () => {
    const libraryCmp = renderer.create(<Library />).toJSON();
    expect(libraryCmp).toMatchSnapshot();
});
