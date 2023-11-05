console.log(process.argv)

const cmd = process.argv[2]
if(cmd === 'add'){
    console.log('Adding Notes..')
}else if(cmd === 'remove'){
    console.log('Removing Notes..')
}

// node app.js add --> write in terminal

const yargs = require('yargs')

console.log(yargs.argv)

yargs.command({
    command:'add',
    describe:'add a new notes',
    handler:function(){
        console.log('Adding a new command line')
    }
})

