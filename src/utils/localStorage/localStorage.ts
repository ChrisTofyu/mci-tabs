interface localStorageProps {
  [key: string]: string;
}
export const localStorageUtil = () => {
  const setlocalStorage = (data: localStorageProps) => {
    if (Object.keys(data).length > 0) {
      for (const key in data) {
        if (key) {
          localStorage.setItem(key, data[key]);
        }
      }
    }
  };
  const removelocalStorage = (...keys: string[]) => {
    keys.forEach(key => {
      localStorage.removeItem(key);
    });
  };
  return { setlocalStorage, removelocalStorage };
};

export default localStorageUtil;
