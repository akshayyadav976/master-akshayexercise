const yargs = require("yargs");
const notes = require('./notes.js')

yargs.command ({
    command : 'add',
    describe : 'add a note',
    builder:{
        title:{
            describe :'Add title',
            demandOption : true,
            type:'string'
        },
        body:{
            describe:'add body',
            demandOption : true,
            type:'string'
        }
        
    },

    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe : 'remove a note',
    builder:{
        title:{
            describe :'remove title',
            demandOption : true,
            type:'string'
        }
    },
    handler : function(argv){
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command : 'list',
    describe: 'display list of employee',
    handler : function(){
        const emplist = 
        console.log('Akshay','yadav')
    }
})
yargs.command({
    command : 'read',
    describe: 'read name of employee',
    handler : function(){
        const name = process.argv[3]
        console.log(yargs.argv)
        console.log('reading name of employee')
        console.log('Displaying name of employee : '+name)
    }
})

console.log(yargs.argv)
/* 3 const chalk = require('chalk')
console.log(chalk.green.bgRed.bold('error'))*/

/* 2 const validator = require('validator')
const getNotes = require('./notes.js')
const content = getNotes();
console.log(content)

console.log(validator.isURL('http:/abcg.in'))
*/

// 1 const fs = require('fs');
//fs.appendFileSync('notes.txt','my name is nodejs')
//fs.writeFileSync('notes.txt','my name is node');

// const add = require('./utils.js')

// const sum = add(5,5);

// console.log(sum)
