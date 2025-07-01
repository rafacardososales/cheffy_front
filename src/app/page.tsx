import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import { PostFeatured } from '@/components/PostFeatured';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader containerClasses='min-h-20 mb-16' />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </>
  );
}
