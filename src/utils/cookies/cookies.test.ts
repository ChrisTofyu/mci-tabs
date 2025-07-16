import cookieUtil from './cookies';

describe('cookieUtil', () => {
  beforeEach(() => {
    // Clear all cookies before each test
    document.cookie = '';
  });

  test('setCookie should store a cookie', () => {
    const { setCookie, getCookie } = cookieUtil();
    setCookie({ name: 'test', value: '123' });
    expect(getCookie('test')).toBe('123');
  });

  test('getCookie should return undefined if cookie does not exist', () => {
    const { getCookie } = cookieUtil();
    expect(getCookie('nonexistent')).toBeUndefined();
  });

  test('removeCookie should delete a cookie', () => {
    const { setCookie, removeCookie, getCookie } = cookieUtil();
    setCookie({ name: 'deleteTest', value: '789' });
    removeCookie('deleteTest');
    expect(getCookie('deleteTest')).toBeUndefined();
  });
});
