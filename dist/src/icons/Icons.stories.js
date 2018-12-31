'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _react4 = require('@storybook/addon-knobs/react');

var _addonInfo = require('@storybook/addon-info');

var _storybookAddonJsx = require('storybook-addon-jsx');

var _storybookAddonJsx2 = _interopRequireDefault(_storybookAddonJsx);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
(0, _react3.setAddon)(_storybookAddonJsx2.default);
// icons


var IconsList = function IconsList() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    'Trash: ',
    _react2.default.createElement(_.Trash, null)
  );
};

(0, _react3.storiesOf)('Full Icons List', module).addDecorator(function (story) {
  return _react2.default.createElement(
    'div',
    { style: { padding: '3rem' } },
    story()
  );
}).addDecorator(_addonInfo.withInfo).add('List', function () {
  return _react2.default.createElement(IconsList, null);
});

(0, _react3.storiesOf)('Icon Details', module).addDecorator(function (story) {
  return _react2.default.createElement(
    'div',
    { style: { padding: '3rem' } },
    story()
  );
}).addDecorator(_addonInfo.withInfo).addDecorator(_react4.withKnobs).addWithJSX('Trash -> default', function () {
  return _react2.default.createElement(_.Trash, null);
}).addWithJSX('Trash -> with props', function () {
  return _react2.default.createElement(_.Trash, {
    width: (0, _react4.number)('width', 25),
    height: (0, _react4.number)('height', 25),
    color: (0, _react4.color)('color', 'blue') });
});

// This will lead to { onClick: action('clicked'), ... }
var iconWrapperEvents = (0, _addonActions.actions)({ onClick: 'clicked' });

(0, _react3.storiesOf)('Icon Wrapper', module).addDecorator(function (story) {
  return _react2.default.createElement(
    'div',
    { style: { padding: '3rem' } },
    story()
  );
}).addDecorator(_addonInfo.withInfo).addDecorator(_react4.withKnobs).addWithJSX('IconWrapper with Trash icon', function () {
  return _react2.default.createElement(
    _.IconWrapper,
    {
      opacity: (0, _react4.number)('opacity', 0.8),
      cursor: (0, _react4.text)('cursor', 'pointer'),
      display: (0, _react4.text)('display', 'inline-block')
    },
    _react2.default.createElement(_.Trash, null)
  );
}).add('IconWrapper -> with events', function () {
  return _react2.default.createElement(_.IconWrapper, iconWrapperEvents);
});

//# sourceMappingURL=Icons.stories.js.map