import React, { useState } from 'react';
import '../styles/Survey.scss';

import Progress from './Progress';
import Question from './Question';
import Results from './Results';

import { Button } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-elements';
import { Grid } from '@instructure/ui-grid';

function Survey() {
  const questions = [
    'Do you listen to jazz?',
    'Do you go to UCLA?',
    'Would you devote your life to data structures and algorithms?'
  ];
  const questionInputs = [
    [
      {value: '1', label: 'Without jazz I am nothing.' },
      {value: '2', label: 'Meh.' },
      {value: '3', label: 'I hate jazz because I am ignorant.' }
    ],
    [
      {value: '4', label: 'Yes.' },
      {value: '5', label: 'I wish.' },
      {value: '6', label: 'No and I would never.' },
    ],
    [
      {value: '7', label: 'Absolutely.' },
      {value: '8', label: 'I wish I had a choice.' },
      {value: '9', label: 'Never.' }
    ]

  ]
  const maxNumber = questions.length;

  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState(questions[0]);
  const [inputs, setInputs] = useState(questionInputs[0]);
  const [btnTxt, setBtnTxt] = useState('Next');
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBtn = () => {
    let tmp = score;
    setTotal(total + tmp);
    setNumber(number + 1);
    if (number === maxNumber - 1) {
      setBtnTxt('View Results');
    }
    if (btnTxt === 'View Results') {
      setRedirect(true);
    }

    setQuestion(questions[number]);
    setInputs(questionInputs[number]);
  }

  const updateScore = (value) => {
    setScore(value);
  }

  return (
    !redirect ? <Grid colSpacing="large" rowSpacing="large">
      <Grid.Row hAlign="center">
        <Heading as="h1" level="one">
          Survey
        </Heading>
      </Grid.Row>
      <Grid.Row>
        <Question question={question} inputs={inputs} updateScore={updateScore} />
      </Grid.Row>
      <Grid.Row>
        <div className="question-nav">
          <Progress number={number} maxNumber={maxNumber} />
          <Button color="primary" onClick={handleBtn}>
            {btnTxt}
          </Button>
        </div>
      </Grid.Row>
    </Grid> : <Results score={total} />
  )
}

export default Survey;