const fs = require('fs')

// fs.writeFileSync('file1.txt','writeFile is create file')

// fs.readFile('file1.txt','utf-8',(err,res)=>{console.log(res)})

// fs.rename('file1.txt', 'file1Rename.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });

//   fs.appendFile('file1Rename.txt', 'data to append', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });

  fs.unlink('file1Rename.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });