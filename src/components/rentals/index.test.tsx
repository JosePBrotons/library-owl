import React from 'react';
import renderer from 'react-test-renderer';
import Rentals from '.';

test('renders book detail component correctly', () => {
    const rentalsCmp = renderer.create(<Rentals />).toJSON();
    expect(rentalsCmp).toMatchSnapshot();
});
