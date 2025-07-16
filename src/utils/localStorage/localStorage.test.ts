import localStorageUtil from './localStorage';

describe('localStorageUtil', () => {
  beforeEach(() => {
    // Clear all localStorage before each test
    localStorage.clear();
  });

  test('Should add the data to local storage', () => {
    const { setlocalStorage } = localStorageUtil();
    setlocalStorage({ userId: '123', userName: 'John Doe' });
    expect(localStorage.get('userId')).toBe('123');
  });

  test('Remove data from session storage', () => {
    const { setlocalStorage, removelocalStorage } = localStorageUtil();
    setlocalStorage({ userId: '123', userName: 'John Doe' });
    removelocalStorage('userId', 'userName');
    expect(sessionStorage.getItem('userId')).toBeNull();
    expect(sessionStorage.getItem('userName')).toBeNull();
  });
});
