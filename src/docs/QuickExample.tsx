import * as React from 'react';
import Downscreen, { Button, Menu, MenuItem } from '..';

const items = [
  {
    id: '1',
    value: 'apple',
  },
  {
    id: '2',
    value: 'banana',
  },
  {
    id: '3',
    value: 'pear',
  },
  {
    id: '4',
    value: 'watermelon',
  },
  {
    id: '5',
    value: 'lemon',
  },
  {
    id: '6',
    value: 'orange',
  },
  {
    id: '7',
    value: 'dragonfruit',
  },
  {
    id: '8',
    value: 'papaya',
  },
];

const QuickExample = () => {
  return (
    <Downscreen
      onChange={console.log}
      itemsLength={items.length}
      id="quick-example"
    >
      <Button>
        {({ selectedIndex }) =>
          selectedIndex === null ? '(nothing)' : items[selectedIndex].value
        }
      </Button>
      <Menu>
        {({ index, selectedIndex, highlightedIndex }) => (
          <MenuItem key={items[index].id} index={index}>
            {items[index].value}
            {selectedIndex === index ? '-selected' : ''}
            {highlightedIndex === index ? '-highlighted' : ''}
          </MenuItem>
        )}
      </Menu>
    </Downscreen>
  );
};

export default QuickExample;
