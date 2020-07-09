import React from 'react';

import { Text } from '@instructure/ui-text';
import { Button } from '@instructure/ui-buttons';
import { Grid } from '@instructure/ui-grid';
import { Heading } from '@instructure/ui-elements';

function Home() {
  return (
    <Grid colSpacing="large" rowSpacing="large">
      <Grid.Row hAlign="center">
        <Heading as="h1" level="one">Hello.</Heading>
      </Grid.Row>
      <Grid.Row hAlign="center">
        <Text size="large">
          Take this survey and it will tell you how cool you are, based on
          nothing but facts and logic.
        </Text>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col>
        </Grid.Col>
        <Grid.Col>
          <Button color="primary" href="/survey" display="block">
            Start!
          </Button>
        </Grid.Col>
        <Grid.Col>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
}

export default Home;
