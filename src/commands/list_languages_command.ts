import { Command } from 'commander';
import { listLanguages } from '../functions/list_languages';

export function listLanguagesCommand(program: Command) {
  program
    .command('languages <user>')
    .description('List all the languages for a specific user')
    .action(async (user) => {
      try {
        console.log(`Fetching languages for user: ${user}`);
        // async function to show user languages previously stored into database
        await listLanguages(user);
      } catch (error: any) {
        console.error('Error trying to fetch user languages:', error.message);
      }
    });
}
