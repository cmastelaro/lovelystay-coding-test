import 'dotenv/config';
import { program } from 'commander';

// Creating a new Commander program to start our command-line interface
import { getUserProfileCommand } from './src/commands/get_user_profile_command';
import { showUsersProfileCommand } from './src/commands/show_users_profile_command';

// Registering commands
getUserProfileCommand(program);
showUsersProfileCommand(program);

// Parsing command-line arguments
program.parse(process.argv);
