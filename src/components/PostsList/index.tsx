import { postRepository } from '@/repositories/post';
import { PosrCoverImage } from '@/components/PosrCoverImage';
import { PostSumary } from '@/components/PostSumary';
import { findAllPublicPosts } from '@/lib/post/queries';

export async function PostList() {
  const posts = await findAllPublicPosts();
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLink = `/post${post.slug}`;

        return (
          <div className='flex flex-col group gap-4' key={post.id}>
            <PosrCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <PostSumary
              postLink={postLink}
              postHeading='h2'
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
