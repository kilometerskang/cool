import React, { useState } from 'react';

import { Text } from '@instructure/ui-text';
import { Grid } from '@instructure/ui-grid';
import { Heading } from '@instructure/ui-elements';
import { ProgressBar } from '@instructure/ui-progress';

function Results({ score }) {
  const [msg, setMsg] = useState('');

  return (
    <Grid colSpacing="large" rowSpacing="large">
      <Grid.Row hAlign="center">
        <Heading as="h1" level="one">
          Results
        </Heading>
      </Grid.Row>
      <Grid.Row hAlign="center">
        <Text size="medium">
          {msg}
        </Text>
      </Grid.Row>
      <ProgressBar
        valueNow={score}
        valueMax={9}
        meterColor={({ valueNow, valueMax }) => {
          if (valueNow < 5) {
            setMsg('Sorry, you are not very cool.');
            return 'danger';
          } else if (valueNow < 8) {
            setMsg('You\'re alright.');
            return 'warning';
          }
          else {
            setMsg('Keep doing what you do 😎');
            return 'success';
          }
        }}
      />
    </Grid>
    
  );
}

export default Results;
