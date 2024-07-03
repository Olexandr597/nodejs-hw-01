import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const fileContentAddOne = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));

  return fileContentAddOne;
};
console.log(await getAllContacts());
