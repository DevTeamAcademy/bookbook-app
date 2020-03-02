// constants
import * as C from '../../constants';
// theme
import Theme from '../../theme';
// //////////////////////////////////////////////////

export const quoteFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      type: 'switch',
      input: {
        name: C.QUOTE_FIELDS.FIELD_PUBLIC,
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
      type: 'textarea',
      input: {
        ...Theme.form.input.main,
        height: 150,
        name: C.QUOTE_FIELDS.FIELD_QUOTE,
      },
      label: {
        locale: 'labels.quote',
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
        locale: 'labels.category',
        styles: Theme.form.label.main,
      },
      input: {
        options: [],
        isMulti: true,
        isClearable: true,
        name: C.QUOTE_FIELDS.FIELD_CATEGORY,
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
        name: C.QUOTE_FIELDS.FIELD_AUTHOR,
      },
    },
    {
      type: 'creatableSearchSelect',
      reactSelectStyles: Theme.form.reactSelect.main,
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.book',
        styles: Theme.form.label.main,
      },
      input: {
        options: [],
        isClearable: true,
        name: C.QUOTE_FIELDS.FIELD_BOOK,
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
