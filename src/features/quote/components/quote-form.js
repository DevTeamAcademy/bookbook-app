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
      type: 'input',
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
      type: 'input',
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
      type: 'input',
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
      type: 'input',
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
      type: 'input',
      input: {
        ...Theme.form.input.main,
        height: 150,
        required: true,
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

// TODO: move Formik props to own proptype into global proptypes
QuoteForm.propTypes = {
  dirty: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValidating: PropTypes.bool.isRequired,
  validateOnBlur: PropTypes.bool.isRequired,
  validateOnChange: PropTypes.bool.isRequired,
  submitCount: PropTypes.number.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  validateForm: PropTypes.func.isRequired,
  validateField: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  setFormikState: PropTypes.func.isRequired,
  registerField: PropTypes.func.isRequired,
  unregisterField: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

QuoteForm.displayName = 'QuoteForm';
