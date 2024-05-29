import { getGithubUser } from '../github/get_user';
import { getGithubUserLanguages } from '../github/get_user_languages';
import { saveUser } from '../database/save_user';
import { saveUserLanguage } from '../database/save_language';

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

    console.log("Fetching user languages...")
    const userLanguageData = await getGithubUserLanguages(username);
    const languages = new Set<string>();
    for (const repo of userLanguageData) {
      if (repo.language) {
        console.log(repo.language);
        languages.add(repo.language);
      }
    }
    console.log("Saving user languages...")
    await saveUserLanguage(result.id, languages);

    console.log(`User ${username} data saved successfully:`);
    console.log(`id: ${result.id}`);
    console.log(`username: ${result.username}`);
    console.log(`name: ${result.name}`);
    console.log(`location: ${result.location}`);
  } catch (error : any) {
    throw new Error(error.message);
  }
}