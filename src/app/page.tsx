import { SpinLoader } from '@/components/SpinLoader';

export default function HomePage() {
  return (
    <h1>
      <SpinLoader containerClasses='min-h-20' />
    </h1>
  );
}
