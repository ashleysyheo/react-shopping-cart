import { atom } from 'recoil';

import Header from '../components/Header/Header';
import ProductList from '../components/ProductList/ProductList';
import initialListData from '../data/mockData.json';
import { ProductInformation } from '../types';

export const productListState = atom<ProductInformation[]>({
  key: 'productList',
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const storeKey = 'productList';
      const savedValue = localStorage.getItem(storeKey); // 로컬 setSelf json 데이터
      savedValue !== null ? setSelf(JSON.parse(savedValue)) : setSelf(initialListData);

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(storeKey)
          : localStorage.setItem(storeKey, JSON.stringify(newValue));
      });
    },
  ],
});

const ProductListPage = () => {
  return (
    <>
      <Header />
      <main>
        <ProductList />
      </main>
    </>
  );
};

export default ProductListPage;
