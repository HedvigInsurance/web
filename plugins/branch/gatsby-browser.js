const { NODE_ENV = 'development' } = process.env;

export const onClientEntry = (_, { key }) => {
  if (!window.branch || typeof window.branch.init !== 'function') {
    if (NODE_ENV === 'development') {
      throw new Error('Unable to locate branch');
    }
    return;
  }

  window.branch.init(key);
};
