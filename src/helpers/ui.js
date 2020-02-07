import R from 'ramda';
// helpers
import { ifElse } from './logic';
// //////////////////////////////////////////////////

export const spreadUiProps = (styles: Object) => ifElse(R.is(Object, styles), styles, {});
