import { db } from './index';

export interface Language {
  id: number;
  name: string;
}

interface QueryParams {
  [key: string]: string | string[];
}

export async function fetchLanguages(
  user: string | null
): Promise<Language[]>  {
  try {

    const queryParams: QueryParams = {};

    const query = `
      SELECT pl.id, pl.name
      FROM programming_languages pl
      JOIN user_languages ul ON pl.id = ul.language_id
      JOIN users u ON ul.user_id = u.id
      WHERE u.username like $[user];
    `;

    queryParams['user'] = `%${user}%`;

    const users: Language[] = await db.any(query, queryParams);
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
}