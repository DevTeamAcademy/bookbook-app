import React from 'react';
// components
import { FormFields } from '../../../components';
// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
// prop-types
import * as PT from '../../../prop-types';
// theme
import Theme from '../../../theme';
// ui
import { Button } from '../../../ui';
// quote
import { quoteFormSettings } from '../settings';
// //////////////////////////////////////////////////

const QuoteForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} settings={quoteFormSettings} />
      <Button type='submit' {...Theme.btns.main}>
        {H.getLocale('actions.save')}
      </Button>
    </form>
  );
};

export default QuoteForm;

// TODO: add all other prop types
QuoteForm.propTypes = { ...PT.formicPropTypes };

QuoteForm.displayName = 'QuoteForm';
