import { ReactNode } from 'react';

export const truncateByCharacterCount = (
  input: ReactNode,
  maxLength?: number
) => {
  if (typeof input === 'string') {
    if (maxLength === undefined) {
      return input;
    }
    return input.length <= maxLength
      ? input
      : input.slice(0, maxLength) + '...';
  } else {
    // TODO: Need to discuss and confirm the expectation for non-string inputs
    return input;
  }
};
