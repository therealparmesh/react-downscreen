import { Props } from './Downscreen';
import { MenuItemsRef } from './DownscreenContext';

const getFirstPossibleIndex = (
  totalCount: Props['totalCount'],
  map: MenuItemsRef
) => {
  for (let i = 0; i < totalCount; i++) {
    if (map[i]) {
      return i;
    }
  }

  return null;
};

export default getFirstPossibleIndex;
