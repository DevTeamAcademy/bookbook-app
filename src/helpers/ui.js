import { is } from 'ramda';
// helpers
import { ifElse } from './logic';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: add test
export const spreadUiProps = (styles: Object) => ifElse(is(Object, styles), styles, {});
