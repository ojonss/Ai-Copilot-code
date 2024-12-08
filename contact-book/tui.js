const readlineSync = require('readline-sync');
const axios = require('axios');

const baseURL = 'http://localhost:3000/contacts';

async function addContact() {
  const name = readlineSync.question('Enter name: ');
  const emails = readlineSync.question('Enter emails (comma separated): ').split(',');
  const phoneNumbers = readlineSync.question('Enter phone numbers (comma separated): ').split(',');

  await axios.post(`${baseURL}/add`, { name, emails, phoneNumbers });
  console.log('Contact added successfully');
}

async function searchContacts() {
  const query = readlineSync.question('Enter search query: ');
  const response = await axios.get(`${baseURL}/search`, { params: { query } });
  console.log('Search results:', response.data);
}

function main() {
  while (true) {
    console.log('\nContact Book');
    console.log('1. Add Contact');
    console.log('2. Search Contacts');
    console.log('3. Exit');
    const choice = readlineSync.question('Choose an option: ');

    if (choice === '1') {
      addContact();
    } else if (choice === '2') {
      searchContacts();
    } else if (choice === '3') {
      break;
    } else {
      console.log('Invalid choice, please try again.');
    }
  }
}

main();