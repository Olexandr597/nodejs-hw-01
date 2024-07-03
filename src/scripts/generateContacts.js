import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  if (!Array.isArray(fileContent)) {
    throw new Error('Дані бази даних не є масивом');
  }

  const data = Array.from({ length: number }, () => createFakeContact());
  fileContent.push(...data);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(fileContent), 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await generateContacts(5);
