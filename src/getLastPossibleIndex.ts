import { Props } from './Downscreen';
import { MenuItemsRef } from './DownscreenContext';

const getLastPossibleIndex = (
  itemsLength: Props['itemsLength'],
  map: MenuItemsRef
) => {
  for (let i = itemsLength - 1; i >= 0; i--) {
    if (map[i]) {
      return i;
    }
  }

  return null;
};

export default getLastPossibleIndex;
