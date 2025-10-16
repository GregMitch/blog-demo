"use server"

import { getDb } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const title = formData.get("title");
    const contents = formData.get("contents");
    
    const db = await getDb();
    db.run("INSERT INTO posts (title, contents) VALUES (?,?);", [title, contents]);

    revalidatePath("/posts");
}