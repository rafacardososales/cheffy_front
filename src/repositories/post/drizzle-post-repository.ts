import { drizzleDb } from '@/db/drizzle';
import { PostModel } from '@/models/post/post-models';
import { PostRepository } from '@/repositories/post/post-repository';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', `D findAllPublic`, '\n');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('\n', `D findbySlugPublic`, '\n');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });
    if (!post) throw new Error('Post não encontrado para esse Slug');
    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log('\n', `D findAll`, '\n');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log('\n', `D finById`, '\n');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });
    if (!post) throw new Error('Post não encontrado para esse ID');
    return post;
  }
}

/* (async () => {
  como-a-tecnologia-impacta-nosso-bem-estar false
  os-desafios-do-trabalho-remoto-moderno true
   6b204dab-2312-4525-820a-a0463560835f false
  76396dd3-9581-43b5-856d-fe1a78714e8c true
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();
  posts.forEach(post => console.log(post.id, post.published));

  const post = await repo.findBySlugPublic(
    'os-desafios-do-trabalho-remoto-modernso',
  );
  console.log(post);
})();
 */
