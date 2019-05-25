import getFirstPossibleIndex from './getFirstPossibleIndex';
import { State, MenuItemsRef } from './DownscreenContext';
import { Props } from './Downscreen';

const getPreviousIndex = (
  currentIndex: State['highlightedIndex'],
  itemsLength: Props['itemsLength'],
  map: MenuItemsRef
) => {
  if (currentIndex !== null) {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (map[i]) {
        return i;
      }
    }
  }

  for (let i = itemsLength - 1; i >= 0; i--) {
    if (map[i]) {
      return i;
    }
  }

  return getFirstPossibleIndex(itemsLength, map);
};

export default getPreviousIndex;
