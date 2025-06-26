import { PosrCoverImage } from '@/components/PosrCoverImage';
import { PostHeading } from '@/components/PostHeading';

export function PostFeatured() {
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
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-04-20'
        >
          20/04/2025 10:00
        </time>

        <PostHeading as='h1' url={postLink}>
          Ipsum has been the industa
        </PostHeading>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industa galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.It was
          popularised in the 1960s
        </p>
      </div>
    </section>
  );
}
