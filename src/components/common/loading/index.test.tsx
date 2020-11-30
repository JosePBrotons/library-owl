import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import LoadingHOC from '.';

const LoadingFullScreenHOC = LoadingHOC(View);

test('renders LoadingHOC component correctly', () => {
    const loginCmp = renderer
        .create(
            <LoadingFullScreenHOC loading={true}>
                <View />
            </LoadingFullScreenHOC>
        )
        .toJSON();
    expect(loginCmp).toMatchSnapshot();
});
