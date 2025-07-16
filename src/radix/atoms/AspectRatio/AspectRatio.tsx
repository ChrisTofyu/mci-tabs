import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { AspectRatio as RadixAspectRatio } from '@radix-ui/themes';
import { parseAspectRatio } from '@utils/elements/image';

/**
 * The aspect ratio type to maintain (width / height)
 * For example, 16 / 9 or 4 / 3
 */
export type AspectRatioType =
  | '1:1'
  | '2:3'
  | '3:2'
  | '3:4'
  | '4:3'
  | '9:16'
  | '16:9'
  | 'none';

/**
 * Props for the Aspect component, which maintains a consistent aspect ratio for its content.
 */
export interface AspectRatioProps {
  /**
   * The aspect ratio to maintain (width / height)
   * For example, 16 / 9 or 4 / 3
   */
  ratio?: AspectRatioType;

  /**
   * The content to render inside the aspect-ratio container
   * Typically a media element like an image, video, or iframe
   */
  children: ReactNode;

  /**
   * Optional custom class names to apply to the aspect-ratio container for styling.
   */
  classname?: string;

  /**
   * Inline styles for the Aspect Ratio
   * @property
   */
  style?: CSSProperties;
}

/**
 * `AspectRatio` is a layout component that maintains a consistent width-to-height ratio
 * for its child content, such as images, videos, iframes, or other media elements.
 *
 * It ensures that the contained element scales responsively while preserving
 * the specified aspect ratio.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {AspectProps} props - The Aspect Ratio props
 * @returns {ReactElement} - Aspect Ratio Component
 *
 */
export const AspectRatio = ({
  ratio,
  children,
  classname,
  style,
}: AspectRatioProps): ReactElement => {
  const [calcAspectRatio, setCalcAspectRatio] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (ratio) {
      const aspectRatio = parseAspectRatio(ratio);
      setCalcAspectRatio(aspectRatio);
    }
  }, [ratio]);

  if (
    !ratio ||
    ratio === 'none' ||
    !calcAspectRatio ||
    (calcAspectRatio && calcAspectRatio <= 0)
  ) {
    return children as ReactElement;
  }

  return (
    <RadixAspectRatio
      ratio={calcAspectRatio}
      style={style}
      className={classname}
    >
      {children}
    </RadixAspectRatio>
  );
};

export default AspectRatio;
