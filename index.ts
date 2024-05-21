import 'dotenv/config';
import { program } from 'commander';

// Creating a new Commander program to start our command-line interface
import { getUserCommand } from './src/commands/get_user_command';
import { showUsersCommand } from './src/commands/show_users_command';

// Registering commands
getUserCommand(program);
showUsersCommand(program);

// Parsing command-line arguments
program.parse(process.argv);
