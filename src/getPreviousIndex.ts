import getLastPossibleIndex from './getLastPossibleIndex';
import { State, MenuItemsRef } from './DownscreenContext';
import { Props } from './Downscreen';

const getPreviousIndex = (
  currentIndex: State['highlightedIndex'],
  totalCount: Props['totalCount'],
  map: MenuItemsRef
) => {
  if (currentIndex !== null) {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (map[i]) {
        return i;
      }
    }
  }

  return getLastPossibleIndex(totalCount, map);
};

export default getPreviousIndex;
