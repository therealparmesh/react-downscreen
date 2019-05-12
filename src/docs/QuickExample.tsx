import * as React from 'react';
import styled from 'styled-components';
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

const StyledButton = styled(Button)`
  background: white;
  border-radius: 3px;
  border: 2px solid orange;
  color: orange;
  cursor: pointer;
  font-size: 16px;
  padding: 4px 16px;
  width: 240px;

  &:focus {
    box-shadow: 0 0 0 3px lightblue, 0 0 0 1.5px lightblue;
    outline: none;
  }
`;

const StyledMenu = styled(Menu)`
  background: white;
  box-shadow: 0px 8px 16px 0px lightgray;
  position: absolute;
  width: 240px;
  z-index: 1000;
`;

const StyledMenuItem = styled(MenuItem)<{
  selected: boolean;
  highlighted: boolean;
}>`
  background: ${({ highlighted }) => (highlighted ? 'lightgreen' : 'white')};
  color: palevioletred;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  padding: 8px 16px;
`;

const QuickExample = () => {
  return (
    <Downscreen
      onChange={console.log}
      itemsLength={items.length}
      id="quick-example"
    >
      <StyledButton>
        {({ selectedIndex }) =>
          selectedIndex === null ? '(nothing)' : items[selectedIndex].value
        }
      </StyledButton>
      <StyledMenu>
        {({ index, selectedIndex, highlightedIndex }) => (
          <StyledMenuItem
            key={items[index].id}
            index={index}
            selected={selectedIndex === index}
            highlighted={highlightedIndex === index}
          >
            {items[index].value}
          </StyledMenuItem>
        )}
      </StyledMenu>
    </Downscreen>
  );
};

export default QuickExample;
