import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import useAjax from './Ajax';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useAjax', () => {
  const publicKey = 'mockPublicKey';
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should initialize with default states', () => {
    const { result } = renderHook(() => useAjax({ publicKey }));

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.callAjax).toBeInstanceOf(Function);
  });

  test('should set loading to true when a request starts', async () => {
    const { result } = renderHook(() => useAjax({ publicKey }));

    mockedAxios.request.mockResolvedValueOnce({ data: { success: true } });

    await act(async () => {
      const promise = result.current.callAjax({
        url: 'https://example.com/test',
        method: 'GET',
        showLoader: true,
      });
      expect(result.current.loading).toBe(true);
      await promise;
    });

    expect(result.current.loading).toBe(false);
  });

  test('should return result when API call successful', async () => {
    const { result } = renderHook(() => useAjax({ publicKey }));
    const mockData = { id: 1, name: 'John' };

    mockedAxios.request.mockResolvedValueOnce({ data: mockData });

    let response;
    await act(async () => {
      response = await result.current.callAjax({
        url: 'https://example.com/test',
        method: 'GET',
        showLoader: true,
      });
    });

    expect(response).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });
});
