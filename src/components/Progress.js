import React from 'react';

import { ProgressCircle } from '@instructure/ui-progress';
import { Text } from '@instructure/ui-text';

function Progress({ number, maxNumber }) {
  return (
    <ProgressCircle
      size="small"
      screenReaderLabel="Loading completion"
      valueNow={number}
      valueMax={maxNumber}
      margin="0 small 0 0"
      shouldAnimateOnMount
      formatScreenReaderValue={function ({ valueNow, valueMax }) {
        return valueNow + ' out of ' + valueMax
      }}
      renderValue={function ({ valueNow, valueMax }) {
        return (
          <span>
            <Text size="large" weight="bold">{valueNow}</Text>
            <br />
            <Text size="small">/&nbsp;</Text>
            <Text size="small">{valueMax}</Text>
          </span>
        )
      }}
    />
  );
}

export default Progress;
