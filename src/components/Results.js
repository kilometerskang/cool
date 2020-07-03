import React from 'react';

import { Text } from '@instructure/ui-text';
import { Grid } from '@instructure/ui-grid';
import { Heading } from '@instructure/ui-elements';
import { ProgressBar } from '@instructure/ui-progress'

function Results({ score }) {
  return (
    <Grid colSpacing="large" rowSpacing="large">
      <Grid.Row hAlign="center">
        <Heading as="h1" level="one">
          Results
        </Heading>
      </Grid.Row>
      <Grid.Row hAlign="center">
        <Text size="medium">
          You're alright.
        </Text>
      </Grid.Row>
      <ProgressBar
        valueNow={score}
        valueMax={9}
        meterColor={({ valueNow, valueMax }) => {
          if (valueNow < 4) {
            return 'danger';
          } else if (valueNow < 7) {
            return 'warning';
          }
          else {
            return 'success';
          }
        }}
      />
    </Grid>
    
  );
}

export default Results;
