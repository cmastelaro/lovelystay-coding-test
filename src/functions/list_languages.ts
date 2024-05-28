import { fetchLanguages } from '../database/list_languages';

export async function listLanguages(
  user: string | null
) {
  try {
    const users = await fetchLanguages(user);
    if (users.length === 0) {
      console.log("No results.");
    } else {
      console.table(users, 
        ['id', 'name']);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}