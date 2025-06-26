import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type PosrCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PosrCoverImage({ imageProps, linkProps }: PosrCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full h-full overflow-hidden rounded-xl',
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          'w-full h-full object-cover object-center group-hover:scale-105 transition ',
          linkProps.className,
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
