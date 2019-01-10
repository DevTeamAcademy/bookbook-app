import React from 'react';
import PropTypes from 'prop-types';
// ////////////////////////////////////////////////////////////////////////////////////////////////////
export { IconWrapper } from './ui';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

const iconPropTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  opacity: PropTypes.number,
};

const defaultIconProps = {
  width: 13,
  height: 15,
  opacity: 0.8,
  color: 'red',
};

export const Menu = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <g fill={color} fillRule='evenodd'>
      <circle cx='3.5' cy='26.5' r='3.5' />
      <circle cx='14.5' cy='26.5' r='3.5' />
      <circle cx='26.5' cy='26.5' r='3.5' />
      <circle cx='3.5' cy='14.5' r='3.5' />
      <circle cx='14.5' cy='14.5' r='3.5' />
      <circle cx='26.5' cy='14.5' r='3.5' />
      <circle cx='3.5' cy='3.5' r='3.5' />
      <circle cx='14.5' cy='3.5' r='3.5' />
      <circle cx='26.5' cy='3.5' r='3.5' />
    </g>
  </svg>
);
Menu.propTypes = iconPropTypes;
Menu.defaultProps = defaultIconProps;

export const Notify = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 28 30'>
    <path
      fill={color}
      fillRule='evenodd'
      d='M8.962 26.786v.02c0 1.765 2.005 3.194 4.478 3.194 2.475 0 4.48-1.429 4.48-3.194v-.02H8.96h.002zm18.7-3.726l-3.851-4.936v-6.155c0-4.153-3.39-7.613-7.888-8.393V1.677C15.923.753 15.062 0 14 0s-1.924.753-1.924 1.677v1.897c-4.497.78-7.887 4.242-7.887 8.393v6.157L.337 23.062a1.516 1.516 0 0 0-.112 1.748 2 2 0 0 0 1.72.904h24.11c.72 0 1.383-.348 1.719-.904a1.516 1.516 0 0 0-.112-1.75z'
    />
  </svg>
);
Notify.propTypes = iconPropTypes;
Notify.defaultProps = defaultIconProps;

export const Quote = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <g fill={color} fillRule='nonzero'>
      <path d='M4.344 23.313a5.267 5.267 0 0 1-.693-.355c.072.324.171.646.298.963.661 1.646 1.99 2.96 3.741 3.701L6.467 30c-5.07-2.143-7.263-7.607-4.899-12.203l.327-.586c1.182-2.298 4.195-3.292 6.73-2.22 2.534 1.07 3.631 3.803 2.45 6.1-1.183 2.299-4.196 3.293-6.73 2.222zM26.086 8.754c-2.534 1.071-5.548.077-6.73-2.221-1.182-2.298-.085-5.03 2.45-6.102 2.535-1.071 5.548-.077 6.73 2.221l.326.586c2.364 4.596.171 10.06-4.899 12.203l-1.223-2.378c1.752-.74 3.08-2.055 3.741-3.701.127-.317.227-.639.299-.963a5.267 5.267 0 0 1-.694.355z' />
    </g>
  </svg>
);
Quote.propTypes = iconPropTypes;
Quote.defaultProps = defaultIconProps;

export const Library = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <g fill={color} fillRule='evenodd'>
      <path
        fillRule='nonzero'
        d='M29.5 25.714h-.445l.053-.012c.262-.062.431-.334.384-.616l-3.5-21.429a.539.539 0 0 0-.214-.35.473.473 0 0 0-.385-.078l-4.5 1.071c-.262.062-.431.334-.384.616l.42 2.584H17V.536C17 .24 16.776 0 16.5 0h-6c-.276 0-.5.24-.5.536V3.75H5.5c-.276 0-.5.24-.5.536V7.5H.5c-.276 0-.5.24-.5.536v21.428c0 .296.224.536.5.536h29c.276 0 .5-.24.5-.536V26.25c0-.296-.224-.536-.5-.536zm-18.5 0V22.5h5v3.214h-5zm-5 0v-1.071h4v1.071H6zM6 22.5h4v1.071H6V22.5zm5-17.143h5V21.43h-5V5.357zm10 10.714h-4v-3.75h4v3.75zm-4 1.072h4v8.571h-4v-8.571zm5-3.092l1.905 11.663H22V14.051zm3.1-9.658l3.325 20.374-3.522.84-3.328-20.374 3.525-.84zM21 8.571v2.679h-4V8.571h4zm-10-7.5h5v3.215h-5V1.07zm-5 3.75h4V21.43H6V4.82zm-5 3.75h4v17.143H1V8.571zM29 28.93H1v-2.143h28v2.143z'
      />
      <path d='M3.182 10c-.251 0-.455.237-.455.53v7.94c0 .293.204.53.455.53.25 0 .454-.237.454-.53v-7.94c0-.293-.203-.53-.454-.53zM3.182 20c-.251 0-.455.224-.455.5v1c0 .276.204.5.455.5.25 0 .454-.224.454-.5v-1c0-.276-.203-.5-.454-.5zM14.09 7h-1.817c-.251 0-.455.224-.455.5s.204.5.455.5h1.818c.25 0 .454-.224.454-.5s-.203-.5-.454-.5zM14.09 19h-1.817c-.251 0-.455.224-.455.5s.204.5.455.5h1.818c.25 0 .454-.224.454-.5s-.203-.5-.454-.5z' />
    </g>
  </svg>
);
Library.propTypes = iconPropTypes;
Library.defaultProps = defaultIconProps;

export const List = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <g fill={color} fillRule='evenodd'>
      <path
        fillRule='nonzero'
        d='M29.356 0H7.17c-.356 0-.645.3-.645.668v13.285H.644c-.356 0-.644.3-.644.668v11.327C0 28.182 1.753 30 3.907 30h22.185C28.247 30 30 28.182 30 25.948V.668A.657.657 0 0 0 29.356 0zM1.289 25.948V15.29h5.237v10.658c0 1.497-1.175 2.716-2.619 2.716-1.443 0-2.618-1.219-2.618-2.716zm27.422 0c0 1.497-1.175 2.716-2.619 2.716H6.805a4.122 4.122 0 0 0 1.01-2.716V1.336H28.71v24.612z'
      />
      <path d='M11.69 8h13.394c.577 0 1.045-.224 1.045-.5s-.468-.5-1.045-.5H11.69c-.577 0-1.045.224-1.045.5s.468.5 1.045.5zM11.69 15h13.394c.577 0 1.045-.224 1.045-.5s-.468-.5-1.045-.5H11.69c-.577 0-1.045.224-1.045.5s.468.5 1.045.5zM11.69 22h13.394c.577 0 1.045-.224 1.045-.5s-.468-.5-1.045-.5H11.69c-.577 0-1.045.224-1.045.5s.468.5 1.045.5z' />
    </g>
  </svg>
);
List.propTypes = iconPropTypes;
List.defaultProps = defaultIconProps;

export const Search = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <path
      fill={color}
      fillRule='evenodd'
      d='M1.694 11.847c0-2.309.785-4.437 2.09-6.145 1.66-2.172 4.167-3.664 7.028-3.956a10.118 10.118 0 0 1 5.463.977c3.386 1.647 5.73 5.113 5.73 9.125 0 5.6-4.556 10.158-10.155 10.158-2.79 0-5.32-1.13-7.156-2.96-.007-.006-.015-.01-.022-.02l-.03-.031a10.131 10.131 0 0 1-2.948-7.148zM30 27.607l-8.668-8.67a11.776 11.776 0 0 0 2.37-7.088C23.702 5.304 18.395 0 11.85 0 7.82 0 4.268 2.015 2.127 5.088A11.78 11.78 0 0 0 0 11.847c0 6.548 5.308 11.852 11.848 11.852 2.663 0 5.112-.887 7.088-2.37L27.608 30 30 27.608z'
    />
  </svg>
);
Search.propTypes = iconPropTypes;
Search.defaultProps = defaultIconProps;
