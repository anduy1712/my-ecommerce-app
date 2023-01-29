const countApi = {
  // eslint-disable-next-line max-len, no-promise-executor-return
  get: (amount = 1) => new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500)),
};

export default countApi;
