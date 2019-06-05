import * as React from 'react';
import DownscreenContext, {
  initialState,
  State,
  MenuItemsRef,
} from './DownscreenContext';
import useEffectAfterMount from './useEffectAfterMount';
import getFirstPossibleIndex from './getFirstPossibleIndex';
import getLastPossibleIndex from './getLastPossibleIndex';

// TODO: extract custom hooks, break them down by domain
// TODO: clean up state management (useReducer), memoize more for better performance (useMemo)

export interface Props {
  children: React.ReactNode;
  onSelect: (selectedIndex: State['selectedIndex']) => void;
  initial?: State;
  totalCount: number;
  id: Required<React.HTMLAttributes<HTMLDivElement>['id']>;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Downscreen = ({
  children,
  onSelect = () => {},
  initial = initialState,
  totalCount,
  id,
  className,
  style,
}: Props) => {
  const menuItemsRef = React.useRef<MenuItemsRef>({});
  const [state, setState] = React.useState<State>(initial);
  const value = React.useMemo(
    () => ({
      state,
      setState,
      totalCount,
      id,
      getMenuItemsRef: () => menuItemsRef,
    }),
    [state, totalCount, id]
  );

  useEffectAfterMount(() => {
    if (state.isOpen) {
      switch (state.lastKeyOnClose) {
        case 'ArrowUp': {
          setState(s => ({
            ...s,
            highlightedIndex: getLastPossibleIndex(
              totalCount,
              menuItemsRef.current
            ),
            lastKeyOnClose: null,
          }));

          break;
        }
        case 'ArrowDown': {
          setState(s => ({
            ...s,
            highlightedIndex: getFirstPossibleIndex(
              totalCount,
              menuItemsRef.current
            ),
            lastKeyOnClose: null,
          }));

          break;
        }
      }
    }
  }, [state.isOpen]);

  useEffectAfterMount(() => {
    onSelect(state.selectedIndex);
  }, [state.selectedIndex]);

  return (
    <DownscreenContext.Provider value={value}>
      <div
        id={id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={state.isOpen}
        aria-controls={state.isOpen ? `${id}-menu` : undefined}
        aria-owns={state.isOpen ? `${id}-menu` : undefined}
        aria-labelledby={`${id}-label`}
        className={className}
        style={style}
      >
        {children}
      </div>
    </DownscreenContext.Provider>
  );
};

export default Downscreen;
