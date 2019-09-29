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

const formSettings = {
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
        name: C.BOOK_FIELDS.FIELD_SCOPE,
      },
      label: {
        locale: 'labels.scope',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: false,
        name: C.BOOK_FIELDS.FIELD_NAME,
      },
      label: {
        locale: 'labels.name',
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
        name: C.BOOK_FIELDS.FIELD_AUTHOR,
      },
      label: {
        locale: 'labels.author',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'searchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      input: {
        options: [],
        name: C.BOOK_FIELDS.FIELD_LIBRARY,
      },
      label: {
        locale: 'labels.library',
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
        name: C.BOOK_FIELDS.FIELD_SHELF,
      },
      label: {
        locale: 'labels.shelf',
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
        name: C.BOOK_FIELDS.FIELD_CATEGORY,
      },
      label: {
        locale: 'labels.category',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'textarea',
      input: {
        ...Theme.form.input.main,
        height: 150,
        required: true,
        name: C.BOOK_FIELDS.FIELD_BIBLIOGRAPHY,
      },
      label: {
        locale: 'labels.bibliography',
        styles: Theme.form.label.main,
      },
    },
    {
      type: 'textarea',
      input: {
        ...Theme.form.input.main,
        height: 150,
        required: true,
        name: C.BOOK_FIELDS.FIELD_DESCRIPTION,
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
        name: C.BOOK_FIELDS.FIELD_LINK,
      },
      label: {
        locale: 'labels.link',
        styles: Theme.form.label.main,
      },
    },
  ],
};

const BookForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} settings={formSettings} />
      <Button type='submit' {...Theme.btns.main}>
        {H.getLocale('actions.save')}
      </Button>
    </form>
  );
};

export default BookForm;

// TODO: add all other prop types
BookForm.propTypes = { ...PT.formicPropTypes };

BookForm.displayName = 'BookForm';
