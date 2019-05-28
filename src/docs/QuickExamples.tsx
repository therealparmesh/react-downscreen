import * as React from 'react';
import styled from 'styled-components';
import Downscreen, { Button, Input, Label, Menu, MenuItem } from '..';

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

const StyledInput = styled(Input)`
  background: white;
  border: 2px solid orange;
  border-radius: 3px;
  color: orange;
  font-size: 16px;
  padding: 4px 8px;

  &:focus {
    box-shadow: 0 0 0 3px lightblue, 0 0 0 1.5px lightblue;
    outline: none;
  }
`;

const StyledLabel = styled(Label)`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0 8px;
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
  background: ${({ highlighted }) => (highlighted ? 'lightgray' : 'white')};
  color: palevioletred;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  padding: 8px 16px;
`;

export const QuickButtonExample = () => {
  return (
    <Downscreen
      onSelect={console.log}
      itemsLength={items.length}
      id="quick-button-example"
    >
      <StyledButton>
        {selectedIndex =>
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

export const QuickInputExample = () => {
  return (
    <Downscreen
      onSelect={console.log}
      itemsLength={items.length}
      id="quick-input-example"
    >
      <StyledLabel>Select:</StyledLabel>
      <StyledInput>
        {selectedIndex =>
          selectedIndex === null ? null : items[selectedIndex].value
        }
      </StyledInput>
      <StyledMenu>
        {({ index, selectedIndex, highlightedIndex, inputValue }) =>
          items[index].value
            .toLowerCase()
            .includes(inputValue.toLowerCase()) && (
            <StyledMenuItem
              key={items[index].id}
              index={index}
              selected={selectedIndex === index}
              highlighted={highlightedIndex === index}
            >
              {items[index].value}
            </StyledMenuItem>
          )
        }
      </StyledMenu>
    </Downscreen>
  );
};
