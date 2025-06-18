export const getMockData = async (data = '', error = '') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!!data) {
        resolve({
          type: 'Success',
          data,
        });
      } else {
        reject({
          type: 'Error',
          message: error,
        });
      }
    }, 300);
  });
}
