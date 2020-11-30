import React from 'react';
import renderer from 'react-test-renderer';
import BooksCard from '.';

const props = {
    author: 'Emmie Thiel',
    title: 'Ring of Bright Water',
    imgUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
};

test('renders book detail component correctly', () => {
    const booksCardCmp = renderer.create(<BooksCard {...props} />).toJSON();
    expect(booksCardCmp).toMatchSnapshot();
});
