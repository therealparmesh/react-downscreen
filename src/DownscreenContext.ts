import * as React from 'react';
import { Props } from './Downscreen';

export interface State {
  isOpen: boolean;
  selectedIndex: number | null;
  highlightedIndex: number | null;
  inputValue: string;
  lastSelectedInputValue: string | null;
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
  lastSelectedInputValue: null,
  lastKey: null,
};

const DownscreenContext = React.createContext<{
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  totalCount: Props['totalCount'];
  id: Props['id'];
  getMenuItemsRef: () => React.MutableRefObject<MenuItemsRef>;
}>({
  state: initialState,
  setState: () => {},
  totalCount: 0,
  id: '',
  getMenuItemsRef: () => ({
    current: {},
  }),
});

export default DownscreenContext;
