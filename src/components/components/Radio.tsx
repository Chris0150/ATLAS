import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface IPropsModel {
  field: String,
  label1?: String,
  label2?: String,
  label3?: String,
  label4?: String
}

const RadioButtonsGroup = (props:IPropsModel):JSX.Element => {
  const { label1, label2, label3, label4, field } = props;
  const [value, setValue] = useState(label1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
       <FormLabel component="legend">{field}</FormLabel>
      <RadioGroup style={{ flexDirection: "row" }} name="selection" value={value} onChange={handleChange}>
        {[label1, label2, label3, label4].map((label, index) => {
          return label ? (
            <FormControlLabel key={index} labelPlacement="end" value={label} control={<Radio />} label={label} />
          ) : null;
        })}

      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;