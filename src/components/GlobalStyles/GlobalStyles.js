import { PropTypes } from 'prop-types';
import React from 'react';
import './GlobaStyles.scss';

function GlobalStyles({ children }) {
  return React.Children.only(children);
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
