import { db } from './index';

interface User {
  id: number;
  username: string;
  name: string;
  location: string;
  created_at: Date;
  updated_at: Date;
}

interface QueryParams {
  [key: string]: string;
}

export async function fetchUsers(
  location: string | null
): Promise<User[]>  {
  try {
    let query = `
      SELECT DISTINCT users.*
      FROM users
    `;

    const conditions: string[] = [];
    const queryParams: QueryParams = {};

    if (location) {
      conditions.push(`users.location ILIKE $[location]`);
      queryParams['location'] = `%${location}%`;
      // adding new condition when searching for location
      query += ' WHERE ' + conditions.join(' AND ');
    }

    const fetchedUsers: User[] = await db.any(query, queryParams);
    return fetchedUsers;
  } catch (error: any) {
    throw new Error(error.message);
  }
}