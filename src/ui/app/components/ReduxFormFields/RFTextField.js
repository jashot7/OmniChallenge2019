import React from 'react';
import TextField from '@material-ui/core/TextField';

// const RFTextField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched && error && <span>{error}</span>}
//     </div>
//   </div>
// );

// export {RFTextField};


const RFTextField = ({ input, label, type, touched, errors }) => (
  <TextField
    label={label}
    input={input}
  // type={type}
  // touched={touched}
  // errors={errors}
  />
);

export { RFTextField }