import Link from 'next/link';
import React from 'react';

type ErrorMensageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMensage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMensageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div className='min-h-[420px] flex flex-col items-center justify-center mb-16 bg-[#373737] rounded-xl dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-4 text-center'>
        <h1 className='text-5xl font-bold text-red-500 mb-4'>{contentTitle}</h1>
        <div className='text-lg mb-6 text-white'>{content}</div>
        <Link
          href='/'
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition'
        >
          Voltar para a página inicial
        </Link>
      </div>
    </>
  );
}
