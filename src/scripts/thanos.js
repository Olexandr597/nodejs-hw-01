import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  if (!Array.isArray(fileContent)) {
    throw new Error('Дані бази даних не є масивом');
  }
  const updateFileContent = fileContent.filter(() => Math.random() >= 0.5);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updateFileContent), 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await thanos();
