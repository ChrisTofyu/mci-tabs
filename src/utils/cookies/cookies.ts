interface CookieOptions {
  expires?: number;
  path?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

interface CookieProps {
  name: string;
  value: string;
  options?: CookieOptions;
}

/**
 * Session Object - Exposes cookie functions.
 */
export const cookieUtil = () => {
  /**
   * Sets a cookie with optional settings.
   *
   * @param {string} name - Cookie name
   * @param {string} value - Cookie value
   * @param {CookieOptions} options - Additional cookie settings (optional)
   */
  const setCookie = ({ name, value, options }: CookieProps) => {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )};`;

    if (options?.expires) {
      const date = new Date();
      // Removed the logic from here and handled it globally
      date.setTime(date.getTime() + options.expires * 1);
      cookieString += ` expires=${date.toUTCString()};`;
    }

    cookieString += ` path=${options?.path || '/'};`;

    if (options?.secure) cookieString += ' secure;';
    if (options?.sameSite) cookieString += ` samesite=${options.sameSite};`;

    document.cookie = cookieString;
  };

  /**
   * Retrieves a cookie value by name.
   *
   * @param {string} name - Cookie name
   * @returns {string | undefined} - Cookie value or undefined if not found
   */
  const getCookie = (name: string): string | undefined => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (decodeURIComponent(cookieName) === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return undefined;
  };

  /**
   * Removes a cookie by setting its expiration to a past date.
   *
   * @param {string} name - Cookie name
   */
  const removeCookie = (name: string) => {
    document.cookie = `${encodeURIComponent(
      name
    )}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  return { setCookie, getCookie, removeCookie };
};
export default cookieUtil;
