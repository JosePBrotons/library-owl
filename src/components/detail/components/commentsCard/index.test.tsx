import React from 'react';
import renderer from 'react-test-renderer';
import CommentsCard from '.';

const props = {
    comments: [
        {
            username: 'John Blue',
            imgProfile:
                'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=900&q=60',
            comment:
                'Interesting story, disjointed in places. Reminds me why I think wild animals should be left wild.',
        },
    ],
};

const commentsCmp = renderer.create(<CommentsCard {...props} />).toJSON();
test('renders comments card component correctly', () => {
    expect(commentsCmp).toMatchSnapshot();
});
