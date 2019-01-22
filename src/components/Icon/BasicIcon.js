import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
// import faStyles from 'font-awesome/css/font-awesome.css'
import { omit } from 'lodash';

function UnstyledIcon(props) {
    const iconProps = omit(props, ['modifiers']);
    console.log('iconProps:', iconProps)
    //return  <FontAwesome {...iconProps} />
    return (
        <FontAwesome
            className="super-crazy-colors"
            name="home"
            // cssModule={faStyles}
            // size="2x"
            // spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            {...iconProps}
        />
    )
}

const BasicIcon = styled(UnstyledIcon)`
  font-size: 1rem;
`;

BasicIcon.propTypes = {
    name: PropTypes.string.isRequired
};

export default BasicIcon;
