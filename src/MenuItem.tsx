import * as React from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import DownscreenContext from './DownscreenContext';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  index: number;
  children: React.ReactNode;
};

const MenuItem = ({ index, children, ...props }: Props) => {
  const { state, setState, id, getMenuItemsRef } = React.useContext(
    DownscreenContext
  );
  const shouldScroll = React.useRef<boolean>(true);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    getMenuItemsRef().current = {
      ...getMenuItemsRef().current,
      [index]: true,
    };

    return () => {
      getMenuItemsRef().current = {
        ...getMenuItemsRef().current,
        [index]: false,
      };
    };
  }, []);

  React.useEffect(() => {
    if (
      state.highlightedIndex === index &&
      shouldScroll.current &&
      scrollRef.current
    ) {
      scrollIntoViewIfNeeded(scrollRef.current, {
        scrollMode: 'if-needed',
        block: 'nearest',
        inline: 'nearest',
      });
    }

    if (!shouldScroll.current) {
      shouldScroll.current = true;
    }
  }, [state.highlightedIndex, index]);

  const onClick = React.useCallback(() => {
    setState(s => ({
      ...s,
      selectedIndex: index,
      isOpen: false,
    }));
  }, [index]);

  const onMouseMove = React.useCallback(() => {
    if (state.highlightedIndex !== index) {
      shouldScroll.current = false;

      setState(s => ({
        ...s,
        highlightedIndex: index,
      }));
    }
  }, [state.highlightedIndex, index]);

  const onMouseDown = React.useCallback(event => {
    event.preventDefault();
  }, []);

  return (
    <div
      ref={scrollRef}
      aria-selected={state.highlightedIndex === index}
      id={`${id}-menu-item-${index}`}
      role="option"
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      {...props}
    >
      {children}
    </div>
  );
};

export default MenuItem;
