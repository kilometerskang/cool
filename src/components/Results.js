import React from 'react';

import { Text } from '@instructure/ui-text';
import { Grid } from '@instructure/ui-grid';
import { Heading } from '@instructure/ui-elements';

function Results() {
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
    </Grid>
  );
}

export default Results;
