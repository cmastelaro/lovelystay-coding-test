import { getGithubUser } from '../github/get_user';
import { saveUser } from '../database/save_user';

export async function getUser(
  username: string
) {
  try {
    console.log('Fetching Github user data....');
    const data = await getGithubUser(username);
    if (!data) {
      throw new Error(`User data not found for username: ${username}`);
    }
    console.log(data);

    const result = await saveUser({
      id: data.id,
      username: data.login,
      name: data.name ?? '',
      location: data.location ?? ''
    })

    console.log(`User ${username} data saved successfully:`);
    console.log(`id: ${result.id}`);
    console.log(`username: ${result.username}`);
    console.log(`name: ${result.name}`);
    console.log(`location: ${result.location}`);
  } catch (error : any) {
    throw new Error(error.message);
  }
}