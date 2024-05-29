import { fetchUsers } from '../database/get_users';

export async function showUsers(
  location: string | null,
  languages: string | null
) {
  try {
    const users = await fetchUsers(location, languages);
    if (users.length === 0) {
      console.log("No results.");
    } else {
      console.table(users, 
        ['id', 'username', 'name', 'location', 'created_at', 'updated_at']);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}