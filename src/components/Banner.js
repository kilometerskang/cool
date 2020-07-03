import React, {useState} from 'react';

import { AppNav } from '@instructure/ui-navigation';
import { Heading } from '@instructure/ui-elements';
import { View } from '@instructure/ui-view'

function Banner() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <AppNav
      screenReaderLabel="App navigation"
      visibleItemsCount={2}
      renderBeforeItems={
        <View
          display="inline-block"
          margin="small"
          padding="small"
          background="primary"
          borderRadius="pill"
          borderWidth="small"
          position="relative"
          textAlign="center"
          withFocusOutline
          focusPosition="offset"
        >
          <Heading size="large" weight="bold">
            Unscientific Coolness🔥 Test
          </Heading>
        </View>
      }
    >
      <AppNav.Item
        isSelected={selectedIndex === 1}
        renderLabel="Home"
        href="/"
        onClick={() => setSelectedIndex(1)}
      />
      <AppNav.Item
        isSelected={selectedIndex === 2}
        renderLabel="Survey"
        href="/survey"
        onClick={() => setSelectedIndex(2)}
      />
    </AppNav>
  );
}

export default Banner;
