import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

export default function withTheme(WrappedComponent) {
    class withTheme extends Component {
        render() {
            return (
                <ThemeProvider theme={theme}>
                    <WrappedComponent {...this.props} />
                </ThemeProvider>
            );
        }
    }
    return withTheme;
}
