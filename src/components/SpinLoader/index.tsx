/* import clsx from 'clsx'; */

import clsx from 'clsx';

type SpinLoaderProps = {
  containerClasses?: string;
};
export function SpinLoader({ containerClasses = '' }: SpinLoaderProps) {
  return (
    <div
      className={clsx(
        'flex',
        'justify-center',
        'items-center',
        containerClasses,
      )}
    >
      <div
        className={clsx(
          'w-8',
          'h-8',
          'border-4',
          'border-t-transparent',
          'border-orange-500',
          'rounded-full',
          'animate-spin',
        )}
      />
    </div>
  );
}
