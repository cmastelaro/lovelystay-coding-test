// spec/fetchUsers.spec.ts
import { fetchUsers, User } from '../src/database/get_users';
import { db } from '../src/database/index';

// Define a sample user data array
const mockUsers: User[] = [
  {
    id: 1,
    username: 'user1',
    name: 'User One',
    location: 'New York',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    username: 'user2',
    name: 'User Two',
    location: 'Los Angeles',
    created_at: new Date(),
    updated_at: new Date()
  },
];

describe('fetchUsers function', () => {
  it('should return an array of users when location is provided', async () => {
    // Spy on the db.any method to mock its behavior
    spyOn(db, 'any').and.returnValue(Promise.resolve(mockUsers));

    // Test the fetchUsers function
    const location = 'New York';
    const users = await fetchUsers(location, null);
    expect(users).toBeDefined();
  });

  it('should return an array of users when language is provided', async () => {
    // Spy on the db.any method to mock its behavior
    spyOn(db, 'any').and.returnValue(Promise.resolve(mockUsers));

    // Test the fetchUsers function
    const languages = 'JavaScript, TypeScript';
    const users = await fetchUsers(null, languages);
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
  });

  it('should return an array of users when location and language is provided',
    async () => {
    // Spy on the db.any method to mock its behavior
      spyOn(db, 'any').and.returnValue(Promise.resolve(mockUsers));

      // Test the fetchUsers function
      const location = 'New York';
      const languages = 'JavaScript, TypeScript';
      const users = await fetchUsers(location, languages);
      expect(users).toBeDefined();
      expect(users.length).toBeGreaterThan(0);
    });

  it('should return an empty array when no location and no languages provided',
    async () => {
    // Spy on the db.any method to mock its behavior
      spyOn(db, 'any').and.returnValue(Promise.resolve([]));

      // Test the fetchUsers function with no location and no languages provided
      const users = await fetchUsers(null, null);
      expect(users).toBeDefined();
      expect(users.length).toBe(0); // Expect the users array to be empty
    });

  it('should return an empty array when no user is found', async () => {
    // Spy on the db.any method to mock its behavior
    spyOn(db, 'any').and.returnValue(Promise.resolve([]));

    // Test the fetchUsers function with a location provided
    const location = 'Nonexistent Location';
    const users = await fetchUsers(location, null);
    expect(users).toBeDefined();
    expect(users.length).toBe(0); // Expect the users array to be empty
  });
});