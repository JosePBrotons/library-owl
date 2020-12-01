import I18n from 'i18n-js';
import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Navbar from '.';

test('renders card component correctly', () => {
    const navbarCmp = renderer
        .create(
            <Navbar>
                <Text>{I18n.t('global.settings')}</Text>
            </Navbar>
        )
        .toJSON();
    expect(navbarCmp).toMatchSnapshot();
});
