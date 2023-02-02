import product from 'src/mock/product.json';
import { FixMeLater } from 'src/utils';

const productApi = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-promise-executor-return
  get: (amount = 1) => new Promise<FixMeLater>((resolve) => setTimeout(() => resolve(product), 500)),
};

export default productApi;
