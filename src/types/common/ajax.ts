import { AxiosError } from 'axios';

/**
 * Represents a flexible object structure for dynamic key-value pairs,
 * often used for request payloads or general-purpose data objects.
 *
 * @interface payloadProps
 * @property {string} [key] - A dynamic key that can represent any field name.
 * @value {string | number | boolean | null | undefined} -
 *   The associated value for the key, supporting multiple types:
 *   - `string`: For textual values.
 *   - `number`: For numeric values.
 *   - `boolean`: For true/false states.
 *   - `null`: For explicitly null fields.
 *   - `undefined`: For optional or uninitialized fields.
 *   - `payloadProps`: This allows nested objects within the same structure
 *   - `payloadProps[]`: This allows an array of objects, where each object follows the payloadProps structure
 *   - `(string | number | boolean | null)[]`: This allows an array of primitive values
 */
export interface payloadProps {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | undefined
    | payloadProps
    | payloadProps[]
    | (string | number | boolean | null)[];
}

/**
 * Defines a structure for handling form-related errors, including validation
 * errors and API-related issues.
 *
 * @interface FormErrorProps
 * @property {string} [message] - The error message associated with the form field or API response.
 * @property {number | string} [status] - The HTTP status code or application-defined status.
 * @property {number | string} [statusCode] - Alternative field for the HTTP status code, often redundant with `status`.
 * @property {string} [field] - The name of the specific form field that caused the error (if applicable).
 * @property {AxiosError} [error] - The Axios error object for additional details about API-related issues.
 */
export interface FormErrorProps {
  message?: string;
  status?: number;
  statusCode?: number | string;
  field?: string;
  error?: AxiosError;
}

/**
 * Interface defining the structure of properties required for making an Axios request.
 *
 * @property {string} url - The API endpoint URL. This is a required field.
 *
 * @property {payloadProps | string | null | undefined} [payload] -
 *   The data to send with the request. It can be an object, a string, or null/undefined.
 *   For `GET` requests, this will be appended as query parameters.
 *
 * @property {'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'} [method] -
 *   The HTTP method for the request. Defaults to `'GET'`.
 *
 * @property {Record<string, string>} [headers] -
 *   Custom headers to include with the request. This is optional.
 *
 * @property {boolean} [encrypt] -
 *   Whether the payload should be encrypted before sending. Defaults to `true`.
 *
 * @property {boolean} [showLoader] -
 *   Indicates whether to show a loading state during the request. Defaults to `false`.
 *
 **/
export interface AjaxProps {
  url: string;
  payload?: payloadProps | string | null | undefined;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  encrypt?: boolean;
  showLoader?: boolean;
}
