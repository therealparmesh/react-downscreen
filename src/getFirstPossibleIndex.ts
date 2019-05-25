import { Props } from './Downscreen';
import { MenuItemsRef } from './DownscreenContext';

const getFirstPossibleIndex = (
  itemsLength: Props['itemsLength'],
  map: MenuItemsRef
) => {
  for (let i = 0; i < itemsLength; i++) {
    if (map[i]) {
      return i;
    }
  }

  return null;
};

export default getFirstPossibleIndex;
