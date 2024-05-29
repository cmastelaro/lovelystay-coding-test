import { db } from './index';

export interface User {
  id: number;
  username: string;
  name: string;
  location: string;
}

export async function saveUser(
  { username, name, location }: User): Promise<User> 
{
  try {
    const query = `
    INSERT INTO users (username, name, location)
    VALUES ($1, $2, $3)
    ON CONFLICT (username) DO UPDATE SET
      name = EXCLUDED.name,
      location = EXCLUDED.location
      RETURNING *;
    `;
  
    const user = await db.one(query, [username, name, location]);
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}