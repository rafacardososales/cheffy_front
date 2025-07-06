import { drizzleDb } from '.';
import { postsTable } from './schemas';
import { JsonPostRepository } from '@/repositories/post/json-post-repository';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();
  //console.log(posts);

  try {
    await drizzleDb.delete(postsTable); // isso aqui deleta toda a base de dados. muito cuidado. E um delete sem WHERE. E foi feito com unico intuido de teste. lembrar de apagar em produçao.
    await drizzleDb.insert(postsTable).values(posts);
    console.log();
    console.log(`${posts.length} Posts Salvos na base de dados.`);
    console.log();
  } catch (e) {
    console.log();
    console.log('Ocorreu um erro ao inserir os posts');
    console.log();
    console.log(e);
    console.log();
    console.log();
  }
})();
