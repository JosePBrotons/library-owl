import React from 'react';
import renderer from 'react-test-renderer';
import Card from '.';

test('renders card component correctly', () => {
    const cardCmp = renderer.create(<Card />).toJSON();
    expect(cardCmp).toMatchSnapshot();
});
