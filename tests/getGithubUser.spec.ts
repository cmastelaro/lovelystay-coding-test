import axios from 'axios';
import { getGithubUser } from '../src/github/get_user';

describe('getGithubUser function', () => {
  it('should return user data when a valid username is provided', async () => {
    // Mock Axios.get to simulate a successful response
    spyOn(axios, 'get').and.returnValue(
      Promise.resolve({ data: { name: 'John Doe', login: 'johndoe' } }));

    // Test the getGithubUser function with a valid username
    const username = 'johndoe';
    const userData = await getGithubUser(username);
    expect(userData).toBeDefined();
    expect(userData.name).toBe('John Doe');
    expect(userData.login).toBe('johndoe');
  });

  it('should throw an error when an invalid username is provided', async () => {
    // Mock Axios.get to simulate an error response
    spyOn(axios, 'get').and.returnValue(
      Promise.reject(
        new Error('Error fetching invalidusername profile: User not found')));

    // Test the getGithubUser function with an invalid username
    const username = 'invalidusername';
    await expectAsync(getGithubUser(username)).toBeRejectedWithError(
      'Error fetching invalidusername profile: User not found');
  });

  it('should re-throw the error if it is not an Axios error', async () => {
    // Mock Axios.get to simulate a generic error response
    spyOn(axios, 'get').and.returnValue(
      Promise.reject(new Error('Generic error')));

    // Test the getGithubUser function with any username
    const username = 'anyusername';
    await expectAsync(getGithubUser(username)).toBeRejectedWithError(
      'Generic error');
  });
});