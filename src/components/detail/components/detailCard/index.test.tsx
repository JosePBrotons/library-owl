import React from 'react';
import renderer from 'react-test-renderer';
import DetailCard from '.';

const props = {
    id: 5,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
};

const detailCardCmp = renderer.create(<DetailCard {...props} />).toJSON();
test('renders book´s detail card component correctly', () => {
    expect(detailCardCmp).toMatchSnapshot();
});
