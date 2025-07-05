'use client';

import { useEffect } from 'react';
import ErrorMensage from '@/components/ErrorMensage';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErroPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMensage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde.'
    />
  );
}
