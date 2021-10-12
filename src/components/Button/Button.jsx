import React from 'react';
import PropTypes from 'prop-types';

import './style/index.css';

const Button = ({ primary, backgroundColor, size, displayName, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type='button'
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {displayName}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  displayName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
