/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */

import React from 'react';
import connect from 'react-redux';
import { store } from 'redux';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { formValueSelector } from 'redux-form';
import Button from '@material-ui/core/Button';
import LuckyNumberDisplay from 'components/LuckyNumberDisplay/LuckyNumberDisplay';
import { validate } from './validate';
import { RFTextField } from '../../components/ReduxFormFields/RFTextField';

class WelcomeForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.submitting = false;

    this.onSubmit = this.props.onSubmit;
    this.getFavoriteNumberCallback = this.props.getFavoriteNumberCallback;

  }

  render() {
    return (
      <form className="flex flex-column">
        <div>
          <Field
            value={3}
            label={'username'}
            placeholder="User Name"
            name="userName"
            component={RFTextField} name="userName" input={''} label={'username'} type={'input'} touched={false} errors={false}
          />
        </div>
        <div>
          <Field
            name="firstName"
            component={RFTextField} name="firstName" input={''} label={'First Name'} type={'input'} touched={false} errors={false}
          />
        </div>
        <div>
          <Field
            component={RFTextField} name="lastName" input={''} label={'Last Name'} type={'input'} touched={false} errors={false}
          />
        </div>
        <LuckyNumberDisplay luckyNumber={Number(this.state.luckyNumber) || -1} />
        <div className="center mt3">
          <Button type="text" variant="contained" disabled={this.submitting} color="primary" onClick={this.onSubmit('jason')}>
            Submit
          </Button>
        </div>
      </form >
    );
  };

};


// Validation has been added to validate.js
// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/
export default reduxForm({
  form: 'welcomeForm',
  validate
})(WelcomeForm);


