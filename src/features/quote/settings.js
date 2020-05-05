import * as Yup from 'yup';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
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
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.quote',
        styles: Theme.form.label.main,
      },
      input: {
        ...Theme.form.input.main,
        height: 150,
        name: C.QUOTE_FIELDS.FIELD_QUOTE,
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
        locale: 'labels.authors',
        styles: Theme.form.label.main,
      },
      input: {
        options: [],
        isMulti: true,
        isClearable: true,
        name: C.QUOTE_FIELDS.FIELD_AUTHORS,
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
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.page',
        styles: Theme.form.label.main,
      },
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: false,
        name: C.QUOTE_FIELDS.FIELD_PAGE,
      },
    },
    {
      type: 'input',
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.description',
        styles: Theme.form.label.main,
      },
      input: {
        ...Theme.form.input.main,
        height: 150,
        required: false,
        name: C.QUOTE_FIELDS.FIELD_DESCRIPTION,
      },
    },
    {
      type: 'input',
      wrapperStyles: {
        mb: 20,
      },
      label: {
        locale: 'labels.link',
        styles: Theme.form.label.main,
      },
      input: {
        ...Theme.form.input.main,
        type: 'text',
        required: false,
        name: C.QUOTE_FIELDS.FIELD_LINK,
      },
    },
  ],
};

export const quoteInitialValues = {
  [C.QUOTE_FIELDS.FIELD_LINK]: '',
  [C.QUOTE_FIELDS.FIELD_BOOK]: '',
  [C.QUOTE_FIELDS.FIELD_PAGE]: '',
  [C.QUOTE_FIELDS.FIELD_QUOTE]: '',
  [C.QUOTE_FIELDS.FIELD_AUTHORS]: [],
  [C.QUOTE_FIELDS.FIELD_CATEGORY]: '',
  [C.QUOTE_FIELDS.FIELD_PUBLIC]: false,
  [C.QUOTE_FIELDS.FIELD_DESCRIPTION]: '',
};

export const validationSchemaQuote = Yup.object({
  [C.QUOTE_FIELDS.FIELD_LINK]: Yup.string()
    .notRequired()
    .url(H.getShouldBeUrlLocale()),
  [C.QUOTE_FIELDS.FIELD_BOOK]: Yup.string()
    .notRequired()
    .max(2000, H.getValidationMaxLocale(2000)),
  [C.QUOTE_FIELDS.FIELD_PAGE]: Yup.number()
    .notRequired()
    .positive(H.getShouldBePositiveLocale())
    .integer(H.getShouldBeIntegerLocale())
    .max(99999, H.getValidationMaxLocale(99999)),
  [C.QUOTE_FIELDS.FIELD_QUOTE]: Yup.string()
    .required(H.getRequiredLocale())
    .min(10, H.getValidationMinLocale(10))
    .max(2000, H.getValidationMaxLocale(2000)),
  [C.QUOTE_FIELDS.FIELD_AUTHORS]: Yup.array()
    .of(Yup.string())
    .notRequired(),
  [C.QUOTE_FIELDS.FIELD_CATEGORY]: Yup.string()
    .notRequired()
    .max(200, H.getValidationMaxLocale(200)),
  [C.QUOTE_FIELDS.FIELD_PUBLIC]: Yup.bool().notRequired(),
  [C.QUOTE_FIELDS.FIELD_DESCRIPTION]: Yup.string()
    .notRequired()
    .max(2000, H.getValidationMaxLocale(2000)),
});
