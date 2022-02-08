const {ItemFactory} = require('./factory')

const items = ['banana' , 'blood' , 'ink' , 'frog' , 'sky' , 'salt' ,'apple' ];
const colors = {
    'green' : ['banana','apple'],
    'yellow' : ['banana' , 'frog'],
    'red' : ['blood','ink','apple'],
    'black' : ['ink','sky'],
    'white' : ['salt'],
    'blue' :['frog','sky']
};

class Event
{
    constructor(){
        this.handlers = new Map();
        this.itemFactory = new ItemFactory();
    }

    subscribe(handler){
        this.handlers.set(handler,true);
    }

    unsubscribe(handler){
        this.handlers.delete(handler);
    }

    printSubscribedItem(){
        for(const [key,value] of this.handlers.entries()){
            console.log(key , ' ');
        }
    }

    fire(color){
        
        for(const item of colors[color]){

            if(this.handlers.has(item)){
               const buildItem =  this.itemFactory.makeItem(item);
                buildItem.printItemStatement(color);
            }

        }
    }
};

module.exports = {Event}