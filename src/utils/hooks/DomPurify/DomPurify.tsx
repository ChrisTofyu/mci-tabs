import DOMPurify from 'dompurify';
import { ReactNode } from 'react';

export const useDomPurify = (data: string | ReactNode) => {
  const clean = DOMPurify.sanitize(data as string | Node);
  return clean;
};
export default useDomPurify;
