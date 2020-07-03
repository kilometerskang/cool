import React from 'react';
import '../styles/Survey.scss';

import { RadioInputGroup, RadioInput } from '@instructure/ui-radio-input'

function Question({ question, inputs, updateScore }) {
  const handleInput = (event, value) => {
    updateScore(3 - ((value - 1) % 3));
  }
  
  return (
    <RadioInputGroup
      onChange={handleInput}
      name="example1"
      description={question}>
      {inputs.map(input => <RadioInput key={input.value} value={input.value} label={input.label} />)}
    </RadioInputGroup>
  )
}

export default Question;