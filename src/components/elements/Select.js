import React from 'react';
import styled from 'styled-components';

const Select = styled.div`
  width: 100%;
`;
const SelectInput = styled.select`
  width: 100%;
`;

const MySelect = ({ label, options, placeholder, ...inputProps }) => (
  <div className="field">
    <label className="label has-text-weight-light is-capitalized is-size-5">
      {label}
    </label>
    <div className="control">
      <Select className="select">
        <SelectInput {...inputProps}>
          <option>{placeholder}</option>
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectInput>
      </Select>
    </div>
  </div>
);

export default MySelect;
