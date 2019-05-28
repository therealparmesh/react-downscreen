import * as React from 'react';
import DownscreenContext, { State } from './DownscreenContext';
import useEffectAfterMount from './useEffectAfterMount';
import normalizeArrowKey from './normalizeArrowKey';
import getNextIndex from './getNextIndex';
import getPreviousIndex from './getPreviousIndex';

type Props = React.HTMLAttributes<HTMLInputElement> & {
  children: (
    selectedIndex: State['selectedIndex']
  ) => string | false | null | undefined;
};

const Input = ({ children, ...props }: Props) => {
  const {
    state,
    setState,
    itemsLength,
    id,
    getMenuItemsRef,
  } = React.useContext(DownscreenContext);

  const onChange = React.useCallback(event => {
    const {
      target: { value: inputValue },
    } = event;

    setState(s => ({
      ...s,
      isOpen: true,
      highlightedIndex: null,
      inputValue,
    }));
  }, []);

  const onBlur = React.useCallback(() => {
    setState(s => ({
      ...s,
      isOpen: false,
    }));
  }, []);

  const onKeyDown = React.useCallback(
    event => {
      const key = normalizeArrowKey(event);

      switch (key) {
        case 'Enter': {
          if (state.isOpen) {
            event.preventDefault();

            setState(s => ({
              ...s,
              isOpen: false,
              selectedIndex: s.highlightedIndex,
              highlightedIndex: null,
              lastKey: 'Enter',
            }));
          }

          break;
        }
        case 'Escape': {
          event.preventDefault();

          setState(s => ({
            ...s,
            isOpen: false,
            highlightedIndex: null,
            lastKey: 'Escape',
          }));

          break;
        }
        case 'End':
        case 'ArrowUp': {
          event.preventDefault();

          if (state.isOpen) {
            setState(s => ({
              ...s,
              highlightedIndex: getPreviousIndex(
                state.highlightedIndex,
                itemsLength,
                getMenuItemsRef().current
              ),
              lastKey: 'ArrowUp',
            }));
          } else {
            setState(s => ({
              ...s,
              isOpen: true,
              lastKey: 'ArrowUp',
            }));
          }

          break;
        }
        case 'Home':
        case 'ArrowDown': {
          event.preventDefault();

          if (state.isOpen) {
            setState(s => ({
              ...s,
              highlightedIndex: getNextIndex(
                state.highlightedIndex,
                itemsLength,
                getMenuItemsRef().current
              ),
              lastKey: 'ArrowDown',
            }));
          } else {
            setState(s => ({
              ...s,
              isOpen: true,
              lastKey: 'ArrowDown',
            }));
          }

          break;
        }
      }
    },
    [itemsLength, state.highlightedIndex, state.isOpen]
  );

  const inputChildren = React.useMemo(() => children(state.selectedIndex), [
    state.selectedIndex,
  ]);

  useEffectAfterMount(() => {
    setState(s => ({
      ...s,
      inputValue:
        typeof inputChildren === 'string' ? inputChildren : s.inputValue,
    }));
  }, [inputChildren]);

  return (
    <input
      aria-autocomplete="list"
      aria-activedescendant={
        state.isOpen && state.highlightedIndex !== null
          ? `${id}-menu-item-${state.highlightedIndex}`
          : undefined
      }
      aria-controls={state.isOpen ? `${id}-menu` : undefined}
      aria-labelledby={`${id}-label`}
      autoComplete="off"
      id={`${id}-input`}
      type="text"
      value={state.inputValue}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};

export default Input;
