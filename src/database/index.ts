import pgPromise from 'pg-promise';

// pg-promise new instance
const pgp = pgPromise();

// Configuring database connection url based on environment
const db = pgp({
  connectionString: process.env.DATABASE_URL,
});

export { db };