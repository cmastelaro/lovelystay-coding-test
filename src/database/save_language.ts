import { db } from './index';

export async function saveUserLanguage(
  userId: number,
  languages: Set<string>
) {
  try {
    for (const language of languages) {
      const programming_language_data = {
        name: language,
      }

      const languageQuery = `
          INSERT INTO programming_languages (name)
            VALUES ($/name/)
            ON CONFLICT (name)
            DO UPDATE SET name = EXCLUDED.name
            RETURNING id;
        `;

      const languageResult = await db.one(
        languageQuery,
        programming_language_data
      );

      // Making the connection between a programming language and the user
      const data = {
        userId: userId,
        language_id: languageResult.id
      }
      const userLanguageQuery = `
          INSERT INTO user_languages (user_id, language_id)
            VALUES ($/userId/, $/language_id/)
            ON CONFLICT (user_id, language_id)
            DO NOTHING;
        `;

      await db.none(userLanguageQuery, data);
    }

  } catch (error: any) {
    throw new Error(error.message);
  }
}