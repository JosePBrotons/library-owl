import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '.';

test('Renders modal component correctly', () => {
    const props = {
        title: 'Warning',
        message: 'Your internet connection is not stable',
        onPress: jest.fn,
    };
    const modalCmp = renderer.create(<Modal {...props} />).toJSON();
    expect(modalCmp).toMatchSnapshot();
});
