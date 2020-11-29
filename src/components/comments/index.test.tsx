import React from 'react';
import renderer from 'react-test-renderer';
import Comments from '.';

test('renders comments component correctly', () => {
    const commentsCmp = renderer.create(<Comments />).toJSON();
    expect(commentsCmp).toMatchSnapshot();
});
