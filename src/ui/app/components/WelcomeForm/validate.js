/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = (text) => {
  // const errors = {};

  // // TODO: Validate that the user has entered a username, first name, and last name
  // const userName = values.get('userName') || null;
  // if (!userName || userName.length < 2 || userName.indexOf(' ') >= 0) {
  //   console.log('User Name is Required and must have no spaces');
  //   errors.userName = 'Required and must have no spaces.';
  // }
  // if (!values.get('firstName') || values.get('firstName').length < 2) {
  //   console.log('First Name is Required');
  //   errors.firstName = 'Required';
  // }
  // if (!values.get('lastName') || values.get('lastName').length < 2) {
  //   console.log('Last Name is Required');
  //   errors.lastName = 'Required';
  // }

  // return errors;
  return {};
};
