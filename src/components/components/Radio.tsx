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
  const [value, setValue] = useState(props.label1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.field}</FormLabel>
      <RadioGroup style={{ flexDirection: "row"}} name="selection" value={value} onChange={handleChange}>
          {props.label1 ? <FormControlLabel labelPlacement="end" value={props.label1} control={<Radio />} label={props.label1} /> : null}
          {props.label2 ? <FormControlLabel labelPlacement="end" value={props.label2} control={<Radio />} label={props.label2} /> : null}
          {props.label3 ? <FormControlLabel labelPlacement="end" value={props.label3} control={<Radio />} label={props.label3} /> : null}
          {props.label4 ? <FormControlLabel labelPlacement="end" value={props.label4} control={<Radio />} label={props.label4} /> : null}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;