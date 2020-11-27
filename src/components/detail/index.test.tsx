import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '.';

test('renders login component correctly', () => {
    const detailCmp = renderer.create(<Detail />).toJSON();
    expect(detailCmp).toMatchSnapshot();
});
