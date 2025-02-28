const fs = require('fs');

const data = require('./characters.json');

function displayAllCharacters() {
  console.log("\nAll Characters:\n");
  data.forEach((character, index) => {
    console.log(`${index + 1}. ${character.name} (${character.role})`);
  });
}

function findCharacterById(id) {
  const character = data.find((character) => character.id === id);
  if (character) {
    console.log(`\nCharacter found: ${character.name}`);
    console.log(`ID: ${character.id}`);
    console.log(`Description: ${character.description}`);
    console.log(`Age: ${character.age}`);
    console.log(`Role: ${character.role}`);
    console.log(`Active: ${character.isActive ? 'Yes' : 'No'}`);
    console.log(`Born on: ${character.birthDate}`);
    console.log(`Guild: ${character.guild.name}`);
    console.log(`Guild Leader: ${character.guild.leader}`);
  } else {
    console.log("Character not found.");
  }
}

function displayMenu() {
  console.log("welcome to the JSON data viewer!")
  console.log("\n1. Display all characters");
  console.log("2. Find character by ID");
  console.log("3. Exit");
}

function main() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function promptUser() {
    displayMenu();
    rl.question("\nPlease enter your choice: ", (choice) => {
      switch (choice) {
        case '1':
          displayAllCharacters();
          promptUser();
          break;
        case '2':
          rl.question("Enter character ID: ", (id) => {
            findCharacterById(id);
            promptUser();
          });
          break;
        case '3':
          console.log("Goodbye!");
          rl.close();
          break;
        default:
          console.log("Invalid choice. Please try again.");
          promptUser();
      }
    });
  }

  promptUser();
}

main();
