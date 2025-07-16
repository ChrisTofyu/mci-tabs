import { renderHook } from '@testing-library/react';
import { useFeatureFlag } from './useFeatureFlag';

describe('useFeatureFlag', () => {
  it('should parse comma-separated string, trim spaces and normalize keys and return flags as true', () => {
    const { result } = renderHook(() =>
      useFeatureFlag({ config: ' FEATURE_ONE_SHOW ,FEATURE_TWO_HIDE ' })
    );
    expect(result.current).toEqual({
      featureOneShow: true,
      featureTwoHide: true,
    });
  });

  it('should parse array of flags and return flags as true', () => {
    const { result } = renderHook(() =>
      useFeatureFlag({ config: [' FEATURE_ONE_SHOW ', ' FEATURE_TWO_HIDE '] })
    );
    expect(result.current).toEqual({
      featureOneShow: true,
      featureTwoHide: true,
    });
  });

  it('should handle invalid config gracefully', () => {
    const { result } = renderHook(() => useFeatureFlag({ config: undefined }));
    expect(result.current).toEqual({});
  });

  it('should return empty object if config is empty', () => {
    const { result } = renderHook(() => useFeatureFlag({ config: '' }));
    expect(result.current).toEqual({});
  });
});
