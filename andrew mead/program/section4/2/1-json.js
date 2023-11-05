const fs = require('fs')

// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
// };

// const jsonBook = JSON.stringify(book)
// fs.writeFileSync('1-json.json', jsonBook)


const jsonBuffer=fs.readFileSync('./1-json.json')
const jsonData = jsonBuffer.toString()
console.log(JSON.parse(jsonData))