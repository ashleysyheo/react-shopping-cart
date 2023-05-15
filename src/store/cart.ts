import { atom, selector, selectorFamily } from 'recoil';

import { getCartList } from '../api/cartAPI';
import { CART_LIST_LOCAL_STORAGE_KEY } from '../constants';
import { CartItemData } from '../types';
import { removeFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const cartListState = atom<CartItemData[]>({
  key: 'cartList',
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      setSelf(getCartList().then((savedValue) => savedValue ?? []));

      onSet((newValue, _, isReset) => {
        isReset
          ? removeFromLocalStorage(CART_LIST_LOCAL_STORAGE_KEY)
          : saveToLocalStorage(CART_LIST_LOCAL_STORAGE_KEY, newValue);
      });
    },
  ],
});

const cartListItemCountState = selector({
  key: 'cartListItemCount',
  get: ({ get }) => get(cartListState).length,
});

const cartItemQuantityState = selectorFamily({
  key: 'cartItemQuantity',
  get:
    (productId) =>
    ({ get }) => {
      const cartList = get(cartListState);

      return cartList.find((cartItem) => cartItem.productId === productId)?.quantity;
    },
});

export { cartListItemCountState, cartListState, cartItemQuantityState };
