import AtomCard from '@components/atoms/AtomCard';
import { Skeleton } from '@radix-ui/themes';
import React, { ReactElement, useEffect, useRef } from 'react';

/**
 * @interface
 * The Embed props type of {@link Embed}.
 */
export type EmbedProps = {
  /**
   * The source URL of the embed/iframe.
   * @property
   */
  src: string;
  /**
   * The size of the card.
   * @defaultValue `1`
   * @property
   */
  size: '1' | '2' | '3';
  /**
   * Additional class name for the embed.
   * @property
   */
  className?: string;
};

/**
 *
 * @group Molecules
 * @category Component
 *
 * Embed component is a wrapper for an iframe element.
 * It can be used to embed external content such as socials feeds, etc.
 *
 * @param {EmbedProps} props - The props for the Embed component.
 *
 * @returns {JSX.Element} - The Embed component or null if no source is provided.
 *
 */
export const Embed = ({
  src,
  size = '1',
  className,
}: EmbedProps): ReactElement | null => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const iframe = ref.current;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  });

  if (!src) {
    return null;
  }

  return (
    <AtomCard size={size} className={className}>
      <Skeleton width="100%" height="100%" loading={isLoading}>
        <iframe
          ref={ref}
          src={src}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="tagembed"
          loading="lazy"
        ></iframe>
      </Skeleton>
    </AtomCard>
  );
};

export default Embed;
