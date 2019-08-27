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
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const scopeOptions = [
  {
    width: 93,
    value: 'private',
    name: H.getLocale('labels.private'),
  },
  {
    width: 93,
    value: 'semiPublic',
    name: H.getLocale('labels.semiPublic'),
  },
  {
    width: 93,
    value: 'public',
    name: H.getLocale('labels.public'),
  },
];

const quoteFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      type: 'multiswitch',
      wrapperStyles: {
        mb: 15,
      },
      input: {
        options: scopeOptions,
        name: C.QUOTE_FIELDS.FIELD_SCOPE,
      },
      label: {
        locale: 'labels.scope',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'textarea',
      input: {
        ...Theme.form.input.main,
        height: 150,
        required: true,
        name: C.QUOTE_FIELDS.FIELD_QUOTE,
      },
      label: {
        locale: 'labels.quote',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'searchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      input: {
        options: [],
        name: C.QUOTE_FIELDS.FIELD_CATEGORY,
      },
      label: {
        locale: 'labels.category',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'creatableSearchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      input: {
        options: [],
        isMulti: true,
        isClearable: true,
        name: C.QUOTE_FIELDS.FIELD_AUTHOR,
      },
      label: {
        locale: 'labels.author',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'creatableSearchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      input: {
        options: [],
        name: C.QUOTE_FIELDS.FIELD_BOOK,
      },
      label: {
        locale: 'labels.book',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: false,
        name: C.QUOTE_FIELDS.FIELD_PAGE,
      },
      label: {
        locale: 'labels.page',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.main,
        height: 150,
        required: false,
        name: C.QUOTE_FIELDS.FIELD_DESCRIPTION,
      },
      label: {
        locale: 'labels.description',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: false,
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

// TODO: add all other prop types
QuoteForm.propTypes = { ...PT.formicPropTypes };

QuoteForm.displayName = 'QuoteForm';
