import { Command } from 'commander';
import { getUser } from '../functions/get_github_user';

export function getUserCommand(program: Command) {
  program
    .command('get')
    .description('Fetch a GitHub user profile')
    .argument('<username>', 'username to be feched from github')
    .action(async (username: string) => {
      try {
        await getUser(username);
      } catch (error: any) {
        console.error('Error fetching user profile:', error.message);
      }
    });
}
