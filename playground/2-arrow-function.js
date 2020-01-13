const event = {
    name: 'Birthday Party',
    guestList: ['aaa','ddddd'],
    printGuestList(){
        console.log('Guest for '+this.name)
        this.guestList.forEach((guest) => {
            console.log(guest +' is attending '+this.name)
        })
  }
}
event.printGuestList()