const validator = require('validator')
const chalk = require('chalk') //version 2.4.1

const isEmailValid =(value)=> validator.isEmail(value)

console.log(isEmailValid('foo@bar.com'))
console.log(isEmailValid('bar.com'))

const log = console.log;
log(chalk.green.bold('Success!'))
log(chalk.blue.inverse.bold('Success!'))