import { fetchLanguages, Language } from '../src/database/list_languages';
import { db } from '../src/database/index';

// Define a sample language data array
const mockLanguages: Language[] = [
  {
    id: 1,
    name: 'JavaScript'
  },
  {
    id: 2,
    name: 'TypeScript'
  },
];

describe('fetchLanguages function', () => {
  it('should return an array of languages when user is provided', async () => {
    // Spy on the db.any method to mock its behavior
    spyOn(db, 'any').and.returnValue(Promise.resolve(mockLanguages));

    // Test the fetchLanguages function
    const user = 'exampleUser';
    const languages = await fetchLanguages(user);
    expect(languages).toBeDefined();
    expect(languages.length).toBeGreaterThan(0);
  });

  it('should return an empty array when no user is provided', async () => {
    // Spy on the db.any method to mock its behavior
    spyOn(db, 'any').and.returnValue(Promise.resolve([]));

    // Test the fetchLanguages function with no user provided
    const languages = await fetchLanguages(null);
    expect(languages).toBeDefined();
    expect(languages.length).toBe(0); // Expect the languages array to be empty
  });

  it('should throw an error when database query fails', async () => {
    // Spy on the db.any method to mock its behavior and make it fail
    spyOn(db, 'any').and.throwError('Database query failed');

    // Test the fetchLanguages function when database query fails
    await expectAsync(fetchLanguages('exampleUser')).
      toBeRejectedWithError('Database query failed');
  });
});
