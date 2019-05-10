import * as React from 'react';
import DownscreenContext, { initialState, State } from './DownscreenContext';
import useEffectAfterMount from './useEffectAfterMount';

// TODO: extract custom hooks, break them down by domain
// TODO: clean up state management (useReducer), memoize more for better performance (useMemo)

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  onChange: (selectedIndex: State['selectedIndex']) => void;
  initial?: State;
  itemsLength: number;
  id: string;
};

const Downscreen = ({
  children,
  onChange,
  initial = initialState,
  itemsLength,
  id,
  ...props
}: Props) => {
  const [state, setState] = React.useState<State>(initial);
  const value = React.useMemo(
    () => ({
      state,
      setState,
      itemsLength,
      id,
    }),
    [state, itemsLength, id]
  );

  useEffectAfterMount(() => {
    onChange(state.selectedIndex);
  }, [state.selectedIndex]);

  useEffectAfterMount(() => {
    if (state.highlightedIndex >= itemsLength) {
      setState(s => ({ ...s, highlightedIndex: 0 }));
    }
  }, [state.highlightedIndex, itemsLength]);

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
