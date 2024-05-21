import { Command } from 'commander';

export function getUserProfileCommand(program: Command) {
  program
    .command('get')
    .description('Fetch a GitHub user profile')
    .argument('<username>', 'username to be feched from github')
    .action(async (username: string) => {
      try {
        // TODO: implement the async function to get the user profile from github repo
        console.log('.....Fetching a github user profile...under construction');
      } catch (error: any) {
        console.error('Error fetching user profile:', error.message);
      }
    });
}
