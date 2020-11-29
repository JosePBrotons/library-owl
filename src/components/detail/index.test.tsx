import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '.';

test('renders book detail component correctly', () => {
    const detailCmp = renderer.create(<Detail />).toJSON();
    expect(detailCmp).toMatchSnapshot();
});
