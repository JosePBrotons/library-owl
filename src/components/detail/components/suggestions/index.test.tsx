import React from 'react';
import renderer from 'react-test-renderer';
import Suggestions from '.';

const props = {
    suggestions: [
        {
            id: 5,
            author: 'Christopher Pike',
            title: 'Scavenger Hunt',
            genre: 'suspense',
            publisher: 'Pocket Books',
            year: '1989',
            image_url:
                'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
            comments: [
                {
                    username: 'Joyce Duhaine',
                    comment:
                        'My mom, Joyce Duhaine, passed away here at my home after being in hospice for 18 months, and she was halfway through with ‘this book. An avid, and critical, reader, she was enjoying this much more than the one she had finished before it.',
                },
                {
                    username: 'Stacey',
                    comment:
                        'So excited to re-read this book! I’m sad they didn’t have any copies with the other “older” covers but they content inside is all the same. Super glad the shipping was fast!',
                },
            ],
        },
        {
            id: 6,
            author: 'Paula Hawkins',
            title: 'The Girl on the Train',
            genre: 'suspense',
            publisher: 'Riverhead Books',
            year: '2015',
            image_url:
                'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
        },
        {
            id: 7,
            author: 'Anthony Doerr',
            title: 'All the Light We Cannot See',
            genre: 'suspense',
            publisher: 'Scribner',
            year: '2014',
            image_url:
                'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
            comments: [
                {
                    username: 'Candy Evans',
                    comment:
                        "It's been 10 years since I last read this and every bit as captivating as the first time. It was like reading the book for the first time because I didn't remember much from the first time reading it. Since I read this book I have made it a point to read other Lois Duncan books. I am never disappointed!",
                },
                {
                    username: 'Jill Shure',
                    comment:
                        'Lois Duncan has an engrossing imagination! Enjoy.',
                },
            ],
        },
    ],
    genre: 'suspense',
    bookId: 5,
};

const suggestionsCmp = renderer.create(<Suggestions {...props} />).toJSON();
test('renders suggestions component correctly', () => {
    expect(suggestionsCmp).toMatchSnapshot();
});
