import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const fileContentAddOne = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  if (!Array.isArray(fileContentAddOne)) {
    throw new Error('Дані бази даних не є масивом');
  }
  const data = createFakeContact();

  fileContentAddOne.push(data);

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(fileContentAddOne), 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await addOneContact();
