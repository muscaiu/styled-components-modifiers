import React from 'react'
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Icon from '../index';


describe('Icon Element', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Icon name="home" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('adds the left modifier', () => {
        const tree = renderer.create(
            <Icon name="home" modifiers={['left']} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('adds the right modifier', () => {
        const tree = renderer.create(
            <Icon name="home" modifiers={['right']} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
