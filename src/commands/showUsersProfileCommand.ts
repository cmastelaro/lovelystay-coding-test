import { Command } from 'commander';

export function showUsersProfileCommand(program: Command) {
  program
    .command('show')
    .description('Displays the users loaded and saved from our database')
    .option('-l, --location <string>', 'filtering by location')
    .action(async (options) => {
      const location = options.location ?? null;
      try {
        // TODO: implement the async function to get the user profile from github repo
        console.log('.....Displaying and filtering the users ...under construction');
      } catch (error: any) {
        console.error('Error displaying users:', error.message);
      }
    });
}
