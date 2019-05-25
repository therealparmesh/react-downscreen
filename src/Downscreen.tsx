import * as React from 'react';
import DownscreenContext, {
  initialState,
  State,
  MenuItemsRef,
} from './DownscreenContext';
import useEffectAfterMount from './useEffectAfterMount';
import getFirstPossibleIndex from './getFirstPossibleIndex';
import getPreviousIndex from './getPreviousIndex';

// TODO: extract custom hooks, break them down by domain
// TODO: clean up state management (useReducer), memoize more for better performance (useMemo)

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  onChange: (selectedIndex: State['selectedIndex']) => void;
  initial?: State;
  itemsLength: number;
  id: Required<React.HTMLAttributes<HTMLDivElement>['id']>;
};

const Downscreen = ({
  children,
  onChange,
  initial = initialState,
  itemsLength,
  id,
  ...props
}: Props) => {
  const menuItemsRef = React.useRef<MenuItemsRef>({});
  const [state, setState] = React.useState<State>(initial);
  const value = React.useMemo(
    () => ({
      state,
      setState,
      itemsLength,
      id,
      getMenuItemsRef: () => menuItemsRef,
    }),
    [state, itemsLength, id]
  );

  useEffectAfterMount(() => {
    if (state.isOpen) {
      setState(s => ({
        ...s,
        highlightedIndex: null,
      }));
    }
  }, [itemsLength]);

  useEffectAfterMount(() => {
    if (state.isOpen) {
      switch (state.lastKey) {
        case 'ArrowUp': {
          setState(s => ({
            ...s,
            highlightedIndex: getPreviousIndex(
              getFirstPossibleIndex(itemsLength, menuItemsRef.current),
              itemsLength,
              menuItemsRef.current
            ),
          }));

          break;
        }
        case 'ArrowDown': {
          setState(s => ({
            ...s,
            highlightedIndex: getFirstPossibleIndex(
              itemsLength,
              menuItemsRef.current
            ),
            lastKey: 'ArrowDown',
          }));

          break;
        }
      }
    }
  }, [state.isOpen]);

  useEffectAfterMount(() => {
    onChange(state.selectedIndex);
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
        {...props}
      >
        {children}
      </div>
    </DownscreenContext.Provider>
  );
};

export default Downscreen;
