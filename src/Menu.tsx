import * as React from 'react';
import DownscreenContext, { State } from './DownscreenContext';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: (args: {
    index: number;
    selectedIndex: State['selectedIndex'];
    highlightedIndex: State['highlightedIndex'];
    inputValue: State['inputValue'];
  }) => React.ReactNode;
};

const Menu = ({ children, ...props }: Props) => {
  const { state, totalCount, id } = React.useContext(DownscreenContext);

  const menuChildren = React.useMemo(
    () =>
      Array.from(
        {
          length: totalCount,
        },
        (_, index) =>
          children({
            index,
            selectedIndex: state.selectedIndex,
            highlightedIndex: state.highlightedIndex,
            inputValue: state.inputValue,
          })
      ),
    [state.selectedIndex, state.highlightedIndex, state.inputValue]
  );

  return state.isOpen ? (
    <div id={`${id}-menu`} role="listbox" {...props}>
      {menuChildren}
    </div>
  ) : null;
};

export default Menu;
