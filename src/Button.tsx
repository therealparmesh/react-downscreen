import * as React from 'react';
import DownscreenContext, { State } from './DownscreenContext';
import normalizeArrowKey from './normalizeArrowKey';

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  children: (args: {
    selectedIndex: State['selectedIndex'];
  }) => React.ReactNode;
};

const Button = ({ children, ...props }: Props) => {
  const { state, setState, itemsLength, id } = React.useContext(
    DownscreenContext
  );

  const onBlur = React.useCallback(() => {
    setState(s => ({
      ...s,
      highlightedIndex: 0,
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
            highlightedIndex: 0,
            isOpen: !s.isOpen,
          }));

          break;
        }
        case 'Enter': {
          if (state.isOpen) {
            event.preventDefault();
            setState(s => ({
              ...s,
              selectedIndex: s.highlightedIndex,
              highlightedIndex: 0,
              isOpen: false,
            }));
          }

          break;
        }
        case 'Escape': {
          event.preventDefault();
          setState(s => ({
            ...s,
            highlightedIndex: 0,
            isOpen: false,
          }));

          break;
        }
        case 'ArrowUp': {
          if (state.isOpen) {
            event.preventDefault();

            const nextIndex =
              state.highlightedIndex === 0
                ? itemsLength - 1
                : state.highlightedIndex - 1;

            setState(s => ({
              ...s,
              highlightedIndex: nextIndex,
            }));
          } else {
            setState(s => ({
              ...s,
              isOpen: true,
            }));
          }

          break;
        }
        case 'ArrowDown': {
          event.preventDefault();

          if (state.isOpen) {
            const nextIndex =
              state.highlightedIndex === itemsLength - 1
                ? 0
                : state.highlightedIndex + 1;

            setState(s => ({
              ...s,
              highlightedIndex: nextIndex,
            }));
          } else {
            setState(s => ({
              ...s,
              isOpen: true,
            }));
          }

          break;
        }
      }
    },
    [state.highlightedIndex, state.isOpen, itemsLength]
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
