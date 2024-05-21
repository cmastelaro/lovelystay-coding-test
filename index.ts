// Import required libraries
import 'dotenv/config';
import { program } from 'commander';

// Creating a new Commander program to start our command-line interface
import { getUserProfileCommand } from './src/commands/getUserProfileCommand';
import { showUsersProfileCommand } from './src/commands/showUsersProfileCommand';

// Registering commands
getUserProfileCommand(program);
showUsersProfileCommand(program);

// Parsing command-line arguments
program.parse(process.argv);
