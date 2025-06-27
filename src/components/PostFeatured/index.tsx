import { PosrCoverImage } from '@/components/PosrCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostSumary } from '@/components/PostSumary';

export async function PostFeatured() {
  const slug = 'qualquer coisa';
  const postLink = `/post${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PosrCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'bryen_9',
          priority: true,
        }}
      />
      <PostSumary
        postLink={postLink}
        postHeading='h1'
        createdAt={'2025-04-08T00:24:38.616Z'}
        excerpt={
          'O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        }
        title={'Rotina matinal de pessoas altamente eficazes'}
      />
    </section>
  );
}
