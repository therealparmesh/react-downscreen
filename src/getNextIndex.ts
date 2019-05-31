import getFirstPossibleIndex from './getFirstPossibleIndex';
import { State, MenuItemsRef } from './DownscreenContext';
import { Props } from './Downscreen';

const getNextIndex = (
  currentIndex: State['highlightedIndex'],
  totalCount: Props['totalCount'],
  map: MenuItemsRef
) => {
  for (
    let i = currentIndex === null ? 0 : currentIndex + 1;
    i < totalCount;
    i++
  ) {
    if (map[i]) {
      return i;
    }
  }

  return getFirstPossibleIndex(totalCount, map);
};

export default getNextIndex;
