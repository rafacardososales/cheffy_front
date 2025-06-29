import Link from 'next/link';

export default function NotFoundPage({ message }: { message?: string }) {
  return (
    <div className='min-h-[420px] flex flex-col items-center justify-center mb-16 bg-[#373737] rounded-xl dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-4 text-center'>
      <h1 className='text-5xl font-bold text-red-500 mb-4'>Erro 😓</h1>
      <p className='text-lg mb-6 text-white'>
        {message ||
          'A página que você esta tentando acessar não existe nesse site.'}
      </p>
      <Link
        href='/'
        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition'
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
