const fs = require ('fs-extra');

// creating the first directory
fs.emptyDirSync('./firstDirectory');

//creating a text file "text.txt"
fs.ensureFileSync('./firstDirectory/text.txt');

// creating a second directory
fs.emptyDirSync('./secondDirectory');

//moving a file "text.txt" from the first directory to the second
fs.moveSync('./firstDirectory/text.txt', './secondDirectory/text.txt');

// deleting a file "text.txt" from the second directory
fs.removeSync('./secondDirectory/text.txt');

// deleting the first directory
fs.removeSync('./firstDirectory');

// deleting the second directory
fs.removeSync('./secondDirectory');