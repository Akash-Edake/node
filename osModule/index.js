const os = require('os')
console.log(os.homedir())
console.log((os.freemem()/(1024*1024*1024) )+" GB Free" )
console.log(os.hostname())