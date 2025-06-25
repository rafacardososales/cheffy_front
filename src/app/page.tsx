import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { PostHeading } from '@/components/PostHeading';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition '
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>

          <PostHeading as='h1' url='#'>
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

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Esse e meu footer</p>
      </footer>
    </Container>
  );
}
