import axios from 'axios';
import { getGithubUserLanguages } from '../src/github/get_user_languages';

describe('getGithubUserLanguages function', () => {
  it('should return user data when a valid username is provided', async () => {
    // Mock Axios.get to simulate a successful response
    spyOn(axios, 'get').and.returnValue(
      Promise.resolve(
        { data: [{ language: 'JavaScript' }, { language: 'TypeScript' }] }));
  
    // Test the getGithubUserLanguages function with a valid username
    const username = 'johndoe';
    const userLanguages = await getGithubUserLanguages(username);
    expect(userLanguages).toBeDefined();
    expect(userLanguages.length).toBe(2);
    expect(userLanguages[0].language).toBe('JavaScript');
    expect(userLanguages[1].language).toBe('TypeScript');
  });
  
  it('should throw an error when an invalid username is provided', 
    async () => {
    // Mock Axios.get to simulate an error response
      spyOn(axios, 'get').and.returnValue(
        Promise.reject(
          new Error('User not found')));
  
      // Test the getGithubUserLanguages function with an invalid username
      const username = 'invalidusername';
      await expectAsync(getGithubUserLanguages(username)).toBeRejectedWithError(
        'User not found');
    });
  
  it('should re-throw the error if it is not an Axios error', async () => {
    // Mock Axios.get to simulate a generic error response
    spyOn(axios, 'get').and.returnValue(
      Promise.reject(new Error('Generic error')));
  
    // Test the getGithubUserLanguages function with any username
    const username = 'anyusername';
    await expectAsync(getGithubUserLanguages(username)).toBeRejectedWithError(
      'Generic error');
  });
});