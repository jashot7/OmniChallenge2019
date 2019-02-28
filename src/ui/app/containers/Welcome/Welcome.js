/**
 * Welcome.js
 *
 * This container is the component initially displayed when the
 * application is loaded. It is used to collect user data, make
 * a service call, and then show the LuckyNumber container.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import WelcomeForm from 'components/WelcomeForm/WelcomeForm';

import { CONTAINER_KEY, DISPATCH_ACTIONS } from '../constants';
import saga from '../saga';
import reducer from '../../../app/reducer';

import { selector, formValueSelector } from 'redux-form';
import { getLuckyNumber, updateLuckyNumberLocally } from '../actions';

export class Welcome extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * This function is invoked when the Redux Form is submitted.
   *
   * @see https://redux-form.com/7.4.2/docs/gettingstarted.md/#step-4-of-4-reacting-to-submit
   * @param {*} values An immutable map of the Redux Form values
   */
  onSubmit(values) {

    // Make some hacky attempts to get the data at the last moment since I'm out of time ;D
    // const selector = formValueSelector('welcomeForm')
    // connect(
    //   state => ({
    //     firstNameValue: selector(state, 'firstName'),
    //     lastNameValue: selector(state, 'lastName'),
    //     userNameValue: selector(state, 'userName'),
    //     formValues: selector(state, 'firstName', 'lastName', 'userName')

    //   })(values))

    console.log(`<pre>${JSON.stringify(values)}</pre>`)
    let username = 'jason';
    this.props.getLuckyNumber(username);
  }

  render() {

    return (
      <article>
        <Helmet>
          <title>Let us Generate your Favorite Random Number!</title>
        </Helmet>
        <div className="mt5 pa4 center w-25 bg-light-gray">
          <WelcomeForm onSubmit={this.onSubmit} />
        </div>
      </article>
    );

  }
}


Welcome.propTypes = {
  userName: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  favoriteNumber: PropTypes.number
};

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.userName,
    firstName: state.firstName,
    lastName: state.lastName,
    favoriteNumber: state.favoriteNumber
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLuckyNumber: (userName) => { dispatch({ type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER, userName: userName }) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUXDEVTOOLS_EXTENSION__()

