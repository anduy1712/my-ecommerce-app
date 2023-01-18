import product from 'src/mock/product.json';

const productApi = {
  get: (amount = 1) => {
    return new Promise<any>((resolve) =>
      setTimeout(() => resolve(product), 500)
    );
  },
};

export default productApi;
