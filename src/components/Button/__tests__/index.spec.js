import React from 'react'
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import theme from 'theme';

function renderWithTheme(component) {
    return renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    );
};

it('renders correctly', () => {
    const tree = renderWithTheme(
        <Button>
            <Text>Login</Text>
            <Icon name="home" />
        </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('adds the primary modifier', () => {
    const tree = renderWithTheme(
        <Button modifiers={['primary']}>
            <Text>Login</Text>
            <Icon name="home" />
        </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('adds the secondary modifier', () => {
    const tree = renderWithTheme(
        <Button modifiers={['secondary']}>
            <Text>Login</Text>
            <Icon name="home" />
        </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('adds the disabled modifier', () => {
    const tree = renderWithTheme(
        <Button modifiers={['disabled']}>
            <Text>Login</Text>
            <Icon name="home" />
        </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


