import React from 'react';
import renderer from 'react-test-renderer';
import ActivityBar from '.';

test('Renders ActivityBar component correctly', () => {
    const props = {
        icon: 'wifi-off',
        text: 'No connection',
    };
    const activityBarCmp = renderer.create(<ActivityBar {...props} />).toJSON();
    expect(activityBarCmp).toMatchSnapshot();
});
