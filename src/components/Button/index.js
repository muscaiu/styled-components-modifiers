import React from 'react';
import styled from 'styled-components';
import { rgba, lighten } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import withTheme from 'hoc/withTheme';
import modifierConfig from './modifierConfig'
// import Icon from '../Icon';
// import Text from '../Text';

const StyledButton = styled.button`
  background-color: #7D7D7D;
  border-radius: 2px;
  border: solid 1px transparent;
  color: #FFF;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    background-color: ${lighten(0.05, '#7D7D7D')};
    box-shadow: 0 8px 8px 0 ${rgba('#646464', 0.4)};
  }

  ${applyStyleModifiers(modifierConfig)}

`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
};

// Button.Icon = Icon;
// Button.Text = Text;

export default withTheme(Button);
