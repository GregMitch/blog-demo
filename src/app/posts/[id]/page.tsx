import { getDb } from "@/lib/db";
import { notFound } from "next/navigation";
import UpvoteButton from "@/components/upvote-button";

type Post = {
  id: number;
  title: string;
  contents: string;
  createdAt: number;
  updatedAt: number;
};

export default async function Page({ 
    params,
}: {
    params: Promise<{ id: string}>;
}) {
    const id = (await params).id;
    const db = await getDb();

    const statement = db.prepare('SELECT * FROM posts WHERE id = ?');
    const post: Post | undefined = await db.get<Post>('SELECT title, contents FROM posts WHERE id = ?', id);

    if (!post) {
        return notFound();
    }

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl captitalize font-bold mb-4">
                {post.title}
            </h1>
            <p className="whitespace-pre-wrap mt-4">
                {post.contents}
            </p>
            <br></br>
            <UpvoteButton />
        </div>
  );
}