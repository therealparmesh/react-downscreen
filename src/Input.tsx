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
  const { state, setState, totalCount, id, getMenuItemsRef } = React.useContext(
    DownscreenContext
  );

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
      highlightedIndex: null,
      inputValue:
        typeof s.lastSelectedInputValue === 'string'
          ? s.lastSelectedInputValue
          : s.inputValue,
    }));
  }, []);

  const onKeyDown = React.useCallback(
    event => {
      const key = normalizeArrowKey(event);

      switch (key) {
        case 'Enter': {
          if (state.isOpen && state.highlightedIndex !== null) {
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
            selectedIndex: null,
            highlightedIndex: null,
            inputValue: '',
            lastSelectedInputValue: null,
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
                totalCount,
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
                totalCount,
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
    [totalCount, state.highlightedIndex, state.isOpen]
  );

  const inputChildren = React.useMemo(() => children(state.selectedIndex), [
    state.selectedIndex,
  ]);

  useEffectAfterMount(() => {
    setState(s => ({
      ...s,
      inputValue:
        typeof inputChildren === 'string' ? inputChildren : s.inputValue,
      lastSelectedInputValue:
        typeof inputChildren === 'string'
          ? inputChildren
          : s.lastSelectedInputValue,
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
