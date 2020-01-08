const fs = require("fs")
const chalk = require("chalk")
chalk
const getNotes = function(){
    return 'your  notes on followings....'
}
const loadNotes = function(){
    try{
    const dataBuf=  fs.readFileSync('notes.json')
    const dataJson = dataBuf.toString()
    return JSON.parse(dataJson)
    }catch(error){
        return []
    }
    
} 
const addNotes = function(title,body){
   const notes = loadNotes()

   const duplicateNote = notes.filter(function(note){
       return note.title === title
   })

   if(duplicateNote.length === 0){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log("new note added")
   }else{
    console.log("note title already added")
   }
   
} 
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
   
 } 
 

 const removeNotes = function(title){
    const notes = loadNotes()
    const notetokeep = notes.filter(function(note){
        return note.title !== title
    })
  if(notes.length>notetokeep.length){
    
    saveNotes(notetokeep)
    console.log(chalk.green.inverse('Note removed!'))  
  }else{
    console.log(chalk.red.inverse('No Note found!'))  
  }
        
 }

module.exports = {
    getNotes : getNotes,
    addNotes: addNotes,
    removeNotes : removeNotes

}