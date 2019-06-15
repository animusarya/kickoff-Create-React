import React from 'react';

const TextBox = ({ label, ...inputProps }) => (
  <div className="field">
    <label className="label has-text-weight-light is-capitalized is-size-5">
      {label}
    </label>
    <div className="control">
      <textarea className="textarea" {...inputProps} />
    </div>
  </div>
);

export default TextBox;
