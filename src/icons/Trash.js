import React from 'react';
import PropTypes from 'prop-types';

const Trash = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width || '13'} height={height || '15'} viewBox='0 0 13 15'>
    <g fill={color || '#930000'} fillRule='nonzero'>
      <path d='M11.723 1.764H9.556v-1.3C9.556.203 9.327 0 9.044 0c-.027 0-.046.008-.055.017A.072.072 0 0 0 8.953 0H3.787c-.283 0-.502.203-.502.464v1.3H1.109c-.622 0-1.106.447-1.106 1.02V4.457h.96v9.51c0 .574.475 1.012 1.097 1.012h8.712c.622 0 1.106-.438 1.106-1.012v-9.51h.95V2.785c0-.574-.484-1.021-1.105-1.021zM4.29.928h4.251v.836h-4.25V.928zm6.573 13.038c0 .059-.027.084-.091.084H2.06c-.064 0-.092-.025-.092-.084v-9.51h8.895v9.51zm.951-10.439H1.018v-.742c0-.06.027-.093.091-.093h10.614c.064 0 .091.034.091.093v.742z' />
      <path d='M8.258 5.544h1.015v7.679H8.258zM5.918 5.544h1.015v7.679H5.918zM3.577 5.544h1.015v7.679H3.577z' />
    </g>
  </svg>
);

Trash.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Trash;