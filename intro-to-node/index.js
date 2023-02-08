import { copyFile, constants } from 'fs';

// fs.copyFile("file1.txt", "file2.txt");

function callback(err) {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  }
  
  // destination.txt will be created or overwritten by default.
  copyFile('file1.txt', 'destination.txt');
  
  // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
  copyFile('file1.txt', 'destination.txt', constants.COPYFILE_EXCL, callback);