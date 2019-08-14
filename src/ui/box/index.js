import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Abstract, AbstractPropTypes } from '../abstract';
import { top, left, right, bottom, position } from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Box = Abstract('div');

Box.propTypes = AbstractPropTypes;

Box.displayName = 'Box';
