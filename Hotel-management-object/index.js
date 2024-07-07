// Task:1 Create the room construtor

let Room =function(capacity,price,number){
    this.capacity=capacity;
    this.price=price;
    this.number=number;
    this.booked=false
}


// task 2 add the informatiopn method to the prototype
Room.prototype.info=function(){
    var information=' Room Number ' + this.number + ' is ' + (this.booked ? 'booked':'vacant')+' this romm is costs $'+this.price+ ' per night can be host up to ' +this.capacity + (this.capacity>1?' guests ':' guest.');
    console.log(information)
}
var room1=new Room(2,50,1)
var room2=new Room(1,30,2)
var room3=new Room(1,50,3)
room1.info()
room2.info()


// task 3 add the book the method to the prototype
Room.prototype.book=function(){
    this.booked=true;
    console.log(' Romm Number ' + this.number +' has been booked.')
}


// task 4 add the check out method to room prototype
Room.prototype.checkout=function(){
    this.booked=false
    console.log(' Romm Number ' + this.number +' has been booked out')

}


// task 5 add the new changeprice method to the room prototype 
Room.prototype.changePrice=function(newPrice){
    var oldPrice=this.price;
    this.price=newPrice;
    console.log('this price of room number ' + this.number +' has been changed from ' + oldPrice +' to $' + this.price +'.')
}

// task 5 add the pricechnage method cc

room1.checkout()
room1.info()
room1.changePrice(60)

// Task 6 Crrate room1 room2 room3 and hotel 

var hotel={
    name:'Hiltom Town Center',
    star:5,
    rooms:[room1,room2.room3]
}


hotel.listinfo=function(){
    console.log('\n\n Room Info:')
    for(var i=0;i<this.rooms.length;i++){
        this.rooms[i].listinfo();
    }
}
hotel.listinfo();

