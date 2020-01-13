const tasks = {
    tasks : [{
        text : 'Grocery shopping',
        completed : true
    },{
        text : 'cloths shopping',
        completed : false
    },{
        text : 'furniture shopping',
        completed : false

    }],
    getTasksToDo() {

        return thingsToDo =  
        this.tasks.filter((task)=>task.completed === false)
       
    
    }
}
console.log(tasks.getTasksToDo())


