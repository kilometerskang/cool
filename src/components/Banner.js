import React, {useState} from 'react';

import { AppNav } from '@instructure/ui-navigation';
import { Heading } from '@instructure/ui-elements';

function Banner() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <AppNav
      screenReaderLabel="App navigation"
      visibleItemsCount={2}
      renderBeforeItems={
        <Heading size="large" weight="bold">
          Unscientific Coolness Test
        </Heading>
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
