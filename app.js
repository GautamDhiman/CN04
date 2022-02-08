const { _DBG_set_checkMethod } = require('readline-sync');
const readline = require('readline-sync');
const {Event} = require('./event')
const {ItemFactory} = require('./factory')
const { Banana, Blood, Ink, Apple, Frog, Salt, Sky } = require('./GameJs/object')

const items = ['banana' , 'blood' , 'ink' , 'frog' , 'sky' , 'salt' ,'apple' ];
const colors = {
    'green' : ['banana','apple'],
    'yellow' : ['banana' , 'frog'],
    'red' : ['blood','ink','apple'],
    'black' : ['ink','sky'],
    'white' : ['salt'],
    'blue' :['frog','sky']
};

const checkUserCommand = (userCommand) =>{

    if(userCommand[0] === '+'){
        userCommand = userCommand.substring(1);
        return items.includes(userCommand)? 0 : 5;
    }
    else if(userCommand[0] === '-'){
        userCommand = userCommand.substring(1);
        return items.includes(userCommand)? 1 : 5;
    }
    else if(userCommand === 'list' )
       return 2;
    else if(userCommand === 'exit')
       return 3;
    else{
        return colors.hasOwnProperty(userCommand)? 4 : 5;
    }
}


const start = () =>{ 

    const startEvent = new Event();
    let userCommand;

    while(userCommand!='exit'){

        console.log("Enter User Input: ");
        userCommand = readline.question();

        switch(checkUserCommand(userCommand)){
            case 0:
                startEvent.subscribe(userCommand.substring(1));
                break;
            case 1:
                startEvent.unsubscribe(userCommand.substring(1));
                break;
            case 2:
                startEvent.printSubscribedItem();
                break;
            case 3:
                userCommand = 'exit';
                break;
            case 4:
                startEvent.fire(userCommand);
                break;
            case 5:
                console.log('Invalid user input');
                break;
        }

    }

}


start();