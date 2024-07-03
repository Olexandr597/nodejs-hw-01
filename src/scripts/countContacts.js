import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  const fileContentAddOne = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  const countContacts = fileContentAddOne.length;
  return countContacts;
};

console.log(await countContacts());
