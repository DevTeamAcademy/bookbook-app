import React from 'react';
import PropTypes from 'prop-types';
// components
import { FormFields } from '../../../components';
// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
// theme
import Theme from '../../../theme';
// ui
import { Button } from '../../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const quoteFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: true,
        name: C.QUOTE_FIELDS.FIELD_QUOTE,
      },
      label: {
        locale: 'labels.quote',
        styles: Theme.form.label.main,
      },
    },
    {
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: true,
        name: C.QUOTE_FIELDS.FIELD_CATEGORY,
      },
      label: {
        locale: 'labels.category',
        styles: Theme.form.label.main,
      },
    },
    {
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: true,
        name: C.QUOTE_FIELDS.FIELD_AUTHOR,
      },
      label: {
        locale: 'labels.author',
        styles: Theme.form.label.main,
      },
    },
    {
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: true,
        name: C.QUOTE_FIELDS.FIELD_BOOK,
      },
      label: {
        locale: 'labels.book',
        styles: Theme.form.label.main,
      },
    },
    {
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: true,
        name: C.QUOTE_FIELDS.FIELD_PAGE,
      },
      label: {
        locale: 'labels.page',
        styles: Theme.form.label.main,
      },
    },
    {
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: true,
        name: C.QUOTE_FIELDS.FIELD_DESCRIPTION,
      },
      label: {
        locale: 'labels.description',
        styles: Theme.form.label.main,
      },
    },
    {
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: true,
        name: C.QUOTE_FIELDS.FIELD_LINK,
      },
      label: {
        locale: 'labels.link',
        styles: Theme.form.label.main,
      },
    },
  ],
};

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

QuoteForm.propTypes = {};

QuoteForm.displayName = 'QuoteForm';
