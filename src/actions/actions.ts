"use server"

import { getDb } from "@/lib/db";

export async function createPost(formData: FormData) {
    const title = formData.get("title");
    const content = formData.get("content");

    await prisma.post.create({
        data: {
            title,
            content,
        },
    });
}