import { Props } from './Downscreen';
import { MenuItemsRef } from './DownscreenContext';

const getLastPossibleIndex = (
  totalCount: Props['totalCount'],
  map: MenuItemsRef
) => {
  for (let i = totalCount - 1; i >= 0; i--) {
    if (map[i]) {
      return i;
    }
  }

  return null;
};

export default getLastPossibleIndex;
