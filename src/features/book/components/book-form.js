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
// //////////////////////////////////////////////////

const formSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      type: 'switch',
      input: {
        name: C.BOOK_FIELDS.FIELD_PUBLIC,
      },
      label: {
        locale: 'labels.public',
        styles: Theme.form.label.main,
      },
      wrapperStyles: {
        mb: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    {
      type: 'input',
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.name',
        styles: Theme.form.label.main,
      },
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: false,
        name: C.BOOK_FIELDS.FIELD_NAME,
      },
    },
    {
      type: 'creatableSearchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.author',
        styles: Theme.form.label.main,
      },
      input: {
        options: [],
        isMulti: true,
        isClearable: true,
        name: C.BOOK_FIELDS.FIELD_AUTHOR,
      },
    },
    {
      type: 'searchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      wrapperStyles: {
        mb: 20,
      },
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
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.shelf',
        styles: Theme.form.label.main,
      },
      input: {
        options: [],
        isMulti: true,
        isClearable: true,
        name: C.BOOK_FIELDS.FIELD_SHELF,
      },
    },
    {
      type: 'creatableSearchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.category',
        styles: Theme.form.label.main,
      },
      input: {
        options: [],
        isMulti: true,
        isClearable: true,
        name: C.BOOK_FIELDS.FIELD_CATEGORY,
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
