import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import { PostFeatured } from '@/components/PostFeatured';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  );
}
