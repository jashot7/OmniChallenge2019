/**
 * RFTextField.js
 *
 * This special component is used within the Redux Form Field component.
 * It renders a textbox component from the Material UI library.
 * It gets passed special props from Redux Form.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/#props
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


export default class RFTextField extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <TextField
        id="fuckyou"
        label="Fucker"
        className={'fuck-you'}
        value={'fuck you'}
        margin="normal"
      />
    )
  };

};

/* <TextField
id="standard-name"
label="Name"
className={classes.textField}
value={this.state.name}
onChange={this.handleChange('name')}
margin="normal"
/> */