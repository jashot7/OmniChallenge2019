/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import LuckyNumber from '../../containers/LuckyNumber/LuckyNumber';

class LuckyNumberDisplay extends React.PureComponent {

  constructor(luckyNumber) {
    super(luckyNumber);
  }

  render() {
    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        <LuckyNumber luckyNumber={this.props.luckyNumber} />
      </div>
    );
  };
};

// TODO: Add PropTypes (Done)
LuckyNumberDisplay.propTypes = {
  luckyNumber: propTypes.number
}

export default LuckyNumberDisplay;

