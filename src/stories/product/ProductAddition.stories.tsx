import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../../components/common/Modal/Modal';
import ProductAddition from '../../components/product/ProductAddition/ProductAddition';

const meta = {
  title: 'ShoppingCart/Product/ProductAdditionModal',
  component: ProductAddition,
  args: {
    id: 3,
    name: '맛있는 삼겹살',
    price: 10000,
    imageUrl:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    handleModalClose: () => {},
    addItemQuantity: () => new Promise(() => {}),
  },
  decorators: [
    (Story) => (
      <Modal isOpen handleClose={() => {}}>
        <Story />
      </Modal>
    ),
  ],
} satisfies Meta<typeof ProductAddition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
