import React from 'react';
import { isNull } from 'lodash';

const Field = ({ label, className, value, ...inputProps }) => (
  <div className="field">
    <label className="label has-text-weight-light is-capitalized is-size-5">
      {label}
    </label>
    <div className="control">
      <input
        className={`input ${className}`}
        value={isNull(value) ? '' : value}
        {...inputProps}
      />
    </div>
  </div>
);

export default Field;
