import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const fileContent = [];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(fileContent), 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await removeAllContacts();
