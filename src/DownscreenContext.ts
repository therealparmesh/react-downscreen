import * as React from 'react';
import { Props } from './Downscreen';

export interface State {
  isOpen: boolean;
  selectedIndex: number | null;
  highlightedIndex: number | null;
  inputValue: string;
  lastSelectedInputValue: string;
  lastKey: ' ' | 'Enter' | 'Escape' | 'ArrowUp' | 'ArrowDown' | null;
}

export interface MenuItemsRef {
  [key: string]: boolean;
}

export const initialState = {
  isOpen: false,
  selectedIndex: null,
  highlightedIndex: null,
  inputValue: '',
  lastSelectedInputValue: '',
  lastKey: null,
};

const DownscreenContext = React.createContext<{
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  itemsLength: Props['itemsLength'];
  id: Props['id'];
  getMenuItemsRef: () => React.MutableRefObject<MenuItemsRef>;
}>({
  state: initialState,
  setState: () => {},
  itemsLength: 0,
  id: '',
  getMenuItemsRef: () => ({
    current: {},
  }),
});

export default DownscreenContext;
