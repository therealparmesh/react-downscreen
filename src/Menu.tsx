import * as React from 'react';
import DownscreenContext, { State } from './DownscreenContext';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: (args: {
    index: number;
    selectedIndex: State['selectedIndex'];
    highlightedIndex: State['highlightedIndex'];
  }) => React.ReactNode;
};

const Menu = ({ children, ...props }: Props) => {
  const { state, itemsLength, id } = React.useContext(DownscreenContext);

  const menuChildren = React.useMemo(
    () =>
      Array.from(
        {
          length: itemsLength,
        },
        (_, index) =>
          children({
            index,
            selectedIndex: state.selectedIndex,
            highlightedIndex: state.highlightedIndex,
          })
      ),
    [state.selectedIndex, state.highlightedIndex]
  );

  return state.isOpen ? (
    <div id={`${id}-menu`} role="listbox" {...props}>
      {menuChildren}
    </div>
  ) : null;
};

export default Menu;
