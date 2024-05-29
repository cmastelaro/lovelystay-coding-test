import { Command } from 'commander';
import { showUsers } from '../functions/show_users';

export function showUsersCommand(program: Command) {
  program
    .command('show')
    .description('Show the users loaded and saved from our database')
    .option('--location <string>', 'filtering by location')
    .option('--languages <string>', 'filtering by languages')
    .action(async (options) => {
      const location = options.location ?? null;
      const languages = options.languages ?? null;
      try {
        // async function to show users previously stored into database
        await showUsers(location, languages);
      } catch (error: any) {
        console.error('Error trying to fetch users:', error.message);
      }
    });
}
