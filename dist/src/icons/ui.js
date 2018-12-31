'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  cursor: ', '\n  &:hover {\n    opacity: 1;\n  }\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  cursor: ', '\n  &:hover {\n    opacity: 1;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPose = require('react-pose');

var _reactPose2 = _interopRequireDefault(_reactPose);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: check types from styled-system

var iconWrapperPropTypes = {
  color: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  opacity: _propTypes2.default.number
};

var defaultIconWrapperProps = {
  opacity: 0.8,
  cursor: 'pointer',
  display: 'inline-block'
};

var IconWrapper = exports.IconWrapper = _styledComponents2.default.div(_templateObject, _styledSystem.color, _styledSystem.space, _styledSystem.width, _styledSystem.height, _styledSystem.border, _styledSystem.display, _styledSystem.opacity, _styledSystem.boxShadow, function (_ref) {
  var cursor = _ref.cursor;
  return cursor || 'initial';
});

IconWrapper.propTypes = iconWrapperPropTypes;
IconWrapper.defaultProps = defaultIconWrapperProps;

// export const IconWrapper = posed(styled.div`
//   ${color}
//   ${space}
//   ${width}
//   ${height}
//   ${border}
//   ${display}
//   ${opacity}
//   ${boxShadow}
// `)({
//   hovered: { opacity: 1 },
//   unHovered: { opacity: 0.8 }
// });

// export const BarNavigationItemWrapper = posed(styled('div')`
// position: relative;

// &::before {
//   top: 0px;
//   left: -15px;
//   content: '>';
//   font-weight: 700;
//   position: absolute;
//   opacity: ${({ active }) => ifElse(active, 1, 0)};
//   color: ${themeGet('colors.mainOrange', 'white')}; 
// }
// `)({
// opened: { opacity: 1 },
// closed: { opacity: 0 },
// });

{/* <HeadSectionSecondTextWrapper
  mb={80}
  opacity={0}
  pose='visible'
  textAlign='center'
  initialPose='hidden'
  width={[230, 300, 400]}
  fontSize={[18, 24, 32]}
  color={themeGet('colors.mainOrange', 'white')(props)}
  >
  {H.getLocaleItem(['mainPage', 'mainSectionSecondText'], props.locale)}
  </HeadSectionSecondTextWrapper> */}

//# sourceMappingURL=ui.js.map