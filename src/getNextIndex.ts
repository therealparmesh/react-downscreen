import getFirstPossibleIndex from './getFirstPossibleIndex';
import { State, MenuItemsRef } from './DownscreenContext';
import { Props } from './Downscreen';

const getNextIndex = (
  currentIndex: State['highlightedIndex'],
  itemsLength: Props['itemsLength'],
  map: MenuItemsRef
) => {
  for (
    let i = currentIndex === null ? 0 : currentIndex + 1;
    i < itemsLength;
    i++
  ) {
    if (map[i]) {
      return i;
    }
  }

  return getFirstPossibleIndex(itemsLength, map);
};

export default getNextIndex;
