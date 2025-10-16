import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

export async function getDb(): Promise<Database> {
    const dbPath = path.join(process.cwd(), 'src/lib/blog.db');
    
    let db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    });

    return db;
}