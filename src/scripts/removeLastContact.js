import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const fileContentRemoveLast = JSON.parse(fileContent);

    if (!Array.isArray(fileContentRemoveLast)) {
      throw new Error('Дані бази даних не є масивом');
    }

    if (fileContentRemoveLast.length > 0) {
      fileContentRemoveLast.pop();
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(fileContentRemoveLast, null, 2),
        'utf8',
      );
    }
  } catch (err) {
    console.error('Помилка видалення контакту з файлу:', err);
  }
};

await removeLastContact();
