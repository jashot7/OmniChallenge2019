/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { LuckyNumberDisplay} from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';
import { CONTAINER_KEY } from '../constants';
import { bindActionCreators } from 'redux';

export default class LuckyNumber extends React.PureComponent {
  constructor(luckyNumber) {
    super(luckyNumber);
  }

  render() {
    return (
      <section>
        <Helmet>
          <title>{`Lucky Number is {this.props.luckyNumber}`}</title>
        </Helmet>
        <h1>Your Lucky Favorite Number is...</h1>
        <h1>{this.props.luckyNumber}</h1>
      </section>
    );
  }
}
