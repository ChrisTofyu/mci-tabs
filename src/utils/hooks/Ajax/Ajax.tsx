import { useState } from 'react';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import useEncrypt from '@utils/hooks/Encrypt/Encrypt';
import { AJAX_CONST } from '@utils/constants/common';
import {
  FormErrorProps,
  payloadProps,
  AjaxProps,
} from '@internal/types/common';
import { cookieUtil } from '@utils/cookies';

/**
 * Interface representing the details of an error response.
 */
interface errorResponseDetails {
  /**
   * A message describing the error.
   * This is optional and may be `undefined` if no error message is provided.
   */
  errorMessage?: string | undefined;

  /**
   * The status code associated with the error.
   * Can be a string or a number, and is optional.
   * This may be `undefined` if no status code is provided.
   */
  statusCode?: string | number | undefined;
}
/**
 * Interface representing the structure of an error response.
 *
 * @property {string} message -
 *   The error message describing the issue encountered during the request.
 *
 * @property {number} status -
 *   The HTTP status code associated with the error.
 **/
interface ErrorResponse {
  details: errorResponseDetails | undefined;
  status: number; // HTTP status code associated with the error
  error: AxiosError;
}

/**
 * Interface representing the return value of the `useAxios` hook.
 *
 * @property {<T = payloadProps>(options: AjaxProps) => Promise<T>} callAxios -
 *   A function to make API calls. Accepts an `AjaxProps` object as input and returns a promise that resolves to the API response.
 *
 * @property {boolean} loading -
 *   Indicates whether an API call is currently in progress.
 *
 * @property {string | null} error -
 *   Holds the error message, if any, from the last API call. Null if no error occurred.
 **/
interface useAjaxProps {
  callAjax: <T = payloadProps>(options: AjaxProps) => Promise<T>; // Function to make API calls
  loading: boolean; // Indicates loading state
  error: FormErrorProps | null; // Holds the error message, if any
}

/**
 * Interface representing the properties required for using AJAX data.
 *
 * @interface useAjaxDataProps
 */
interface useAjaxDataProps {
  /**
   * The public key used for authentication or identification.
   *
   * @type {string}
   */
  publicKey: string;

  /**
   * The URL endpoint for the AJAX request. Optional.
   *
   * @type {string}
   * @default undefined
   */
  url?: string;

  /**
   * The timeout duration for the AJAX request in milliseconds. Optional.
   *
   * @type {number}
   * @default undefined
   */
  timeout?: number;
  /**
   * * @property {boolean} [userAuthRequired] -
   *   Whether the interceptor pass headers. Defaults to `true`.
   */
  userAuthRequired?: boolean;
}

// Custom hook for Ajax API requests
export const useAjax = ({
  publicKey,
  url,
  timeout,
  userAuthRequired,
}: useAjaxDataProps): useAjaxProps => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FormErrorProps | null>(null);
  const encryption = useEncrypt(publicKey);
  const API = createAPI({ url, timeout, userAuthRequired });

  // Function to make an Axios API request
  const callAjax = async <T = payloadProps,>({
    url,
    payload = null,
    method = 'GET',
    headers = {},
    showLoader = false,
    encrypt = true,
  }: AjaxProps): Promise<T> => {
    try {
      if (showLoader) {
        setLoading(true);
      }
      setError(null);

      // Append query parameters to URL for GET requests
      if (method?.toUpperCase() === 'GET' && payload) {
        url += `?${new URLSearchParams(payload as Record<string, string>).toString()}`;
      }

      let data: string | undefined = undefined;
      if (payload && method.toUpperCase() !== 'GET') {
        payload = JSON.stringify(payload);
        data = encrypt ? encryption(payload) : payload; // Encrypt or use raw payload
      }

      const config: AxiosRequestConfig = {
        url,
        method,
        headers: {
          ...headers,
        },
        data,
      };

      const response: AxiosResponse = await API(config);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error(`Error status: ${response.status}`);
      }
    } catch (error: unknown) {
      const refinedError = refineError(error as AxiosError);
      setError(refinedError);
      throw refinedError;
    } finally {
      setLoading(false);
    }
  };

  return { callAjax, loading, error }; // Return the API call function and states
};

const createAPI = ({
  url = '',
  timeout = AJAX_CONST.timout,
  userAuthRequired = true,
}): AxiosInstance => {
  // Create an Axios instance with default configuration
  const API = axios.create({
    baseURL: url,
    timeout: timeout,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const { getCookie } = cookieUtil();

  // Request Interceptor to add Authorization headers
  API.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getCookie('authToken'); // Retrieve token from localStorage
      if (token && userAuthRequired) {
        config.headers = config.headers ?? {};
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor to log responses or handle errors globally
  API.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(error)
  );

  return API;
};

// Utility function to log and refine Axios errors
const refineError = (error: AxiosError): FormErrorProps => {
  if (error?.response && error?.response?.data) {
    // If the error has a response, extract its status and message
    const errorResponse = error.response.data as ErrorResponse;
    return {
      message:
        errorResponse?.details?.errorMessage ||
        'An unknown server error occurred.',
      status: error.response.status,
      statusCode: errorResponse?.details?.statusCode,
      error,
    };
  } else if (error.request) {
    // If no response was received, it's likely a network error
    console.error('Network error or no response received');
    return {
      message: 'Network error or no response received.',
      status: 0,
      error,
    };
  } else {
    // Handle errors during the request setup
    console.error('Error in setup of request:', error.message);
    return {
      message: error.message || 'Error in setup of request.',
      status: 0,
      error,
    };
  }
};

export default useAjax;
