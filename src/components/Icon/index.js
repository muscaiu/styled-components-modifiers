import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import modifierConfig from './modifierConfig';
import BasicIcon from './BasicIcon';

const Icon = styled(BasicIcon)`
  ${applyStyleModifiers(modifierConfig)}
`;

export default Icon;
