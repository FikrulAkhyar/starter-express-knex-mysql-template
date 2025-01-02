import db from '../configs/db/index.js';

export async function getUsers() {
    const data = await db('users').select('*');
    
    return data;
}