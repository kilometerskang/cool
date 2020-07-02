import React from 'react';
import '../styles/Survey.scss';

import { RadioInputGroup, RadioInput } from '@instructure/ui-radio-input'

function Question(state) {
  const handleInput = function (event, value) {
    console.log(value);
  }
  
  return (
    <RadioInputGroup
      onChange={handleInput}
      name="example1"
      description={state.question}>
      {state.inputs.map(input => <RadioInput key={input.value} value={input.value} label={input.label} />)}
    </RadioInputGroup>
  )
}

export default Question;