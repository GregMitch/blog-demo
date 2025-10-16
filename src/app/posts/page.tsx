import { getDb } from "@/lib/db";

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

export default async function Page() {
  const db = await getDb();
  const posts: Post[] = await db.all<Post[]>('SELECT id, title FROM posts');

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl captitalize font-bold mb-4">
        Posts
      </h1>
      
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <a href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>

      <form className="max-w-[400px] mx-auto mt-24">
        <input type="text" placeholder="Title" className="border p-2 mb-2 w-full"/>
        <textarea placeholder="Content" className="border p-2 mb-2 w-full"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">Create Post</button>
      </form>
    </div>
  );
}