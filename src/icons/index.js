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

export const Profile = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <path
      fill={color}
      fillRule='nonzero'
      d='M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 27.391C8.156 27.391 2.609 21.844 2.609 15S8.156 2.609 15 2.609 27.391 8.156 27.391 15 21.844 27.391 15 27.391zm-5.798-6.74c.655-.437 1.222-.72 2.305-1.223 1.004-.502 1.611-1.008 2.05-1.888.533-1.064.305-2.026-.407-3.45a30.114 30.114 0 0 0-.185-.363c-.439-.85-.574-1.176-.574-1.336 0-4.263.151-4.565 2.609-4.565s2.609.302 2.609 4.565c0 .16-.135.487-.574 1.336-.08.155-.132.257-.185.364-.712 1.423-.94 2.385-.408 3.449.44.88 1.047 1.386 2.05 1.888 1.084.502 1.651.786 2.306 1.223 1.567 1.044 2.68 2.634 2.68 3.48a1.304 1.304 0 1 0 2.609 0c0-1.857-1.618-4.169-3.842-5.651-.812-.542-1.55-.91-2.586-1.386-.545-.272-.741-.436-.884-.72-.03-.06.052-.404.408-1.117l.17-.334c.675-1.307.864-1.765.864-2.532 0-2.94-.079-3.89-.626-4.985-.764-1.528-2.25-2.189-4.591-2.189-2.34 0-3.827.66-4.59 2.189-.548 1.095-.627 2.045-.627 4.985 0 .767.189 1.225.864 2.532l.17.334c.356.713.438 1.056.408 1.116-.143.285-.34.449-.884.721-1.037.476-1.774.844-2.586 1.386-2.224 1.482-3.842 3.794-3.842 5.65a1.304 1.304 0 0 0 2.609 0c0-.845 1.113-2.435 2.68-3.48z'
    />
  </svg>
);
Profile.propTypes = iconPropTypes;
Profile.defaultProps = defaultIconProps;

export const Share = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 32'>
    <g fill={color} fillRule='evenodd'>
      <circle cx='4.923' cy='15.59' r='4.923' />
      <circle cx='24.615' cy='27.077' r='4.923' />
      <circle cx='24.615' cy='4.923' r='4.923' />
      <path d='M9.575 13.949a.54.54 0 0 0 .283-.08l10.39-6.28a.552.552 0 0 0-.569-.945L9.291 12.925a.552.552 0 0 0 .284 1.024zM20.248 24.42L9.86 18.13a.55.55 0 0 0-.57.937l10.388 6.288a.55.55 0 0 0 .755-.184.546.546 0 0 0-.185-.752z' />
    </g>
  </svg>
);
Share.propTypes = iconPropTypes;
Share.defaultProps = defaultIconProps;

export const Help = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <g fill={color} fillRule='evenodd'>
      <circle cx='15' cy='22.178' r='1.465' />
      <path
        fillRule='nonzero'
        d='M15 0C6.71 0 0 6.709 0 15c0 8.29 6.709 15 15 15 8.29 0 15-6.709 15-15 0-8.29-6.709-15-15-15zm0 27.656c-6.995 0-12.656-5.66-12.656-12.656C2.344 8.005 8.004 2.344 15 2.344c6.995 0 12.656 5.66 12.656 12.656 0 6.995-5.66 12.656-12.656 12.656z'
      />
      <path d='M15 7.53a4.693 4.693 0 0 0-4.688 4.687 1.172 1.172 0 1 0 2.344 0A2.346 2.346 0 0 1 15 9.873a2.346 2.346 0 0 1 2.344 2.344A2.346 2.346 0 0 1 15 14.56c-.647 0-1.172.524-1.172 1.171v2.93a1.172 1.172 0 1 0 2.344 0v-1.906a4.696 4.696 0 0 0 3.515-4.54A4.693 4.693 0 0 0 15 7.53z' />
    </g>
  </svg>
);
Help.propTypes = iconPropTypes;
Help.defaultProps = defaultIconProps;

export const About = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <g fill={color} fillRule='evenodd'>
      <path d='M13.288 9.78c.054.11.11.22.164.302.055.082.137.165.192.247.082.082.164.164.274.246.082.055.192.137.329.165.11.055.219.082.356.11.137.027.246.027.356.027.11 0 .246 0 .356-.028.11-.027.22-.054.301-.11h.028a1.773 1.773 0 0 0 .575-.411l.028-.027c.082-.082.137-.164.191-.246a.857.857 0 0 0 .137-.274c0-.028 0-.028.028-.055.055-.11.082-.247.11-.356.027-.11.027-.247.027-.356 0-.11 0-.247-.028-.356-.027-.11-.054-.22-.11-.357a1.555 1.555 0 0 0-.328-.493l-.055-.055c-.082-.082-.164-.137-.274-.219-.11-.055-.192-.11-.301-.164-.11-.055-.22-.082-.329-.11-.137-.027-.247-.027-.356-.027-.11 0-.247 0-.356.027-.11.028-.22.055-.329.11h-.027c-.11.055-.22.11-.302.164-.11.082-.192.137-.274.22a1.773 1.773 0 0 0-.219.246c-.055.082-.11.192-.164.301-.055.11-.083.22-.11.33-.027.136-.027.246-.027.355 0 .11 0 .247.027.356.027.22.082.33.11.439zM17.096 19.808h-.63v-6.712a.707.707 0 0 0-.713-.712h-2.876a.707.707 0 0 0-.713.712v1.48c0 .383.302.712.713.712h.575v4.548h-.575a.707.707 0 0 0-.713.712v1.48c0 .383.302.712.713.712h4.219a.707.707 0 0 0 .712-.713v-1.48c0-.41-.329-.739-.712-.739z' />
      <path
        fillRule='nonzero'
        d='M14.986 0C6.712 0 0 6.712 0 14.986c0 8.274 6.712 14.987 14.986 14.987 8.274 0 14.987-6.713 14.987-14.987C29.973 6.712 23.26 0 14.986 0zm0 28C7.808 28 1.973 22.164 1.973 14.986c0-7.178 5.835-13.013 13.013-13.013S28 7.808 28 14.986 22.164 28 14.986 28z'
      />
    </g>
  </svg>
);
About.propTypes = iconPropTypes;
About.defaultProps = defaultIconProps;

export const Language = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 28'>
    <g fill={color} fillRule='evenodd'>
      <path d='M16.163 17.826l-3.458-3.418.04-.041a23.856 23.856 0 0 0 5.052-8.892h3.99v-2.73h-9.532V.02H9.532v2.724H0v2.71h15.21a21.506 21.506 0 0 1-4.316 7.298 21.473 21.473 0 0 1-3.146-4.562H5.025a23.914 23.914 0 0 0 4.058 6.21l-6.925 6.842 1.927 1.927 6.809-6.808 4.235 4.235 1.034-2.771z' />
      <path
        fillRule='nonzero'
        d='M23.83 10.915h-2.724l-6.127 16.34h2.723l1.532-4.085h6.468l1.532 4.085h2.723l-6.127-16.34zm-3.575 9.532l2.213-5.903 2.213 5.903h-4.426z'
      />
    </g>
  </svg>
);
Language.propTypes = iconPropTypes;
Language.defaultProps = defaultIconProps;

export const Settings = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <path
      fill={color}
      fillRule='nonzero'
      d='M29.768 19.219l-3.263-2.643c.083-.551.123-1.07.123-1.576 0-.507-.04-1.025-.123-1.576l3.263-2.643a.61.61 0 0 0 .145-.791l-2.971-4.98a.657.657 0 0 0-.781-.274l-3.992 1.41a11.686 11.686 0 0 0-2.827-1.572L18.608.517A.64.64 0 0 0 17.971 0H12.03a.64.64 0 0 0-.637.517l-.734 4.057A11.686 11.686 0 0 0 7.83 6.147L3.839 4.736a.655.655 0 0 0-.78.274L.086 9.99a.61.61 0 0 0 .145.791l3.263 2.643c-.083.551-.123 1.07-.123 1.576 0 .507.04 1.025.123 1.576L.232 19.219a.61.61 0 0 0-.145.791l2.971 4.98c.158.263.49.379.781.274l3.992-1.41a11.686 11.686 0 0 0 2.827 1.572l.734 4.057a.64.64 0 0 0 .637.517h5.942a.64.64 0 0 0 .637-.517l.734-4.057a11.686 11.686 0 0 0 2.827-1.573l3.992 1.411a.66.66 0 0 0 .78-.274l2.972-4.98a.61.61 0 0 0-.145-.791zM15 21.25c-3.562 0-6.46-2.804-6.46-6.25S11.438 8.75 15 8.75s6.46 2.804 6.46 6.25-2.898 6.25-6.46 6.25z'
    />
  </svg>
);
Settings.propTypes = iconPropTypes;
Settings.defaultProps = defaultIconProps;

export const Logout = ({ color, width, height }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 30 30'>
    <path
      fill={color}
      fillRule='evenodd'
      d='M0 15c0-4.834 2.304-9.286 6.125-12.094A1.304 1.304 0 1 1 7.67 5.008 12.37 12.37 0 0 0 2.61 15c0 6.844 5.547 12.391 12.391 12.391S27.391 21.844 27.391 15A12.37 12.37 0 0 0 22.27 4.963a1.304 1.304 0 0 1 1.532-2.11A14.979 14.979 0 0 1 30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15zM13.696 1.307C13.696.585 14.275 0 15 0c.72 0 1.304.58 1.304 1.307v13.69c0 .722-.579 1.307-1.304 1.307-.72 0-1.304-.58-1.304-1.306V1.307z'
    />
  </svg>
);
Logout.propTypes = iconPropTypes;
Logout.defaultProps = defaultIconProps;
