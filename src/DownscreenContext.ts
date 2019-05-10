import * as React from 'react';

export interface State {
  isOpen: boolean;
  selectedIndex: number | null;
  highlightedIndex: number;
}

export const initialState = {
  isOpen: false,
  selectedIndex: null,
  highlightedIndex: 0,
};

const DownscreenContext = React.createContext<{
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  itemsLength: number;
  id: string;
}>({
  state: initialState,
  setState: () => {},
  itemsLength: 0,
  id: '',
});

export default DownscreenContext;
