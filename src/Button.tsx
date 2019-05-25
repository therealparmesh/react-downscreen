import * as React from 'react';
import DownscreenContext, { State } from './DownscreenContext';
import normalizeArrowKey from './normalizeArrowKey';
import getNextIndex from './getNextIndex';
import getPreviousIndex from './getPreviousIndex';

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  children: (args: {
    selectedIndex: State['selectedIndex'];
  }) => React.ReactNode;
};

const Button = ({ children, ...props }: Props) => {
  const {
    state,
    setState,
    itemsLength,
    id,
    getMenuItemsRef,
  } = React.useContext(DownscreenContext);

  const onBlur = React.useCallback(() => {
    setState(s => ({
      ...s,
      isOpen: false,
    }));
  }, [state.highlightedIndex, state.isOpen]);

  const onKeyUp = React.useCallback(event => {
    event.preventDefault();
  }, []);

  const onKeyDown = React.useCallback(
    event => {
      const key = normalizeArrowKey(event);

      switch (key) {
        case ' ': {
          event.preventDefault();

          setState(s => ({
            ...s,
            isOpen: !s.isOpen,
            highlightedIndex: null,
            lastKey: ' ',
          }));

          break;
        }
        case 'Enter': {
          if (state.isOpen) {
            event.preventDefault();

            setState(s => ({
              ...s,
              selectedIndex: s.highlightedIndex,
              highlightedIndex: null,
              isOpen: false,
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

  const onClick = React.useCallback(event => {
    event.preventDefault();
    event.target.focus();

    setState(s => ({
      ...s,
      isOpen: !s.isOpen,
    }));
  }, []);

  const buttonChildren = React.useMemo(
    () => children({ selectedIndex: state.selectedIndex }),
    [state.selectedIndex]
  );

  return (
    <button
      aria-label={state.isOpen ? 'close menu' : 'open menu'}
      aria-haspopup
      data-toggle
      id={`${id}-button`}
      role="button"
      type="button"
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onClick={onClick}
      {...props}
    >
      {buttonChildren}
    </button>
  );
};

export default Button;
