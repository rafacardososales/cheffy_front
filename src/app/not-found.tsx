import ErrorMensage from '@/components/ErrorMensage';

export default function NotFoundPage() {
  return (
    <ErrorMensage
      pageTitle='Pagina não encontrata'
      contentTitle='Erro 😓'
      content='A página que você esta tentando acessar não existe nesse site.'
    />
  );
}
