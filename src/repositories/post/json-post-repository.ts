import { PostRepository } from '@/repositories/post/post-repository';
import { PostModel } from '@/models/post/post-models';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
const ROOT_DIR = process.cwd();
console.log('ROOT_DIR:', process.cwd());
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_AWAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_AWAIT_IN_MS <= 0) return;
    {
      await new Promise(resolve => setTimeout(resolve, SIMULATE_AWAIT_IN_MS));
    }
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContext = await readFile(JSON_POST_FILE_PATH, 'utf8');
    const parsedJson = JSON.parse(jsonContext);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    console.log('\n', `findAllPublic`, '\n');
    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    console.log('\n', `findAll`, '\n');
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    // await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado para esse ID');

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    // await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post não encontrado para esse Slug');

    return post;
  }
}
