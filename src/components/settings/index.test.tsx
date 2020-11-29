import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '.';

test('renders settings component correctly', () => {
    const settingsCmp = renderer.create(<Settings />).toJSON();
    expect(settingsCmp).toMatchSnapshot();
});
