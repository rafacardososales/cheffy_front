type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return <h1 className='text-center text-xl py-16'>Rota dinamica: {slug}</h1>;
}
