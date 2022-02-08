const{ Item } = require('./item')

class Banana extends Item{

    printItemStatement(color){
        console.log(`I'm Banana! I'm sometimes ${color}`);
    }

}

class Blood extends Item{

    printItemStatement(color){
        console.log(`I'm Blood! I'm sometimes ${color}`);
    }
}

class Ink extends Item{

    printItemStatement(color){
        console.log(`I'm Ink! I'm sometimes ${color}`);
    }
}

class Frog extends Item{

    printItemStatement(color){
        console.log(`I'm Frog! I'm ${color} today`);
    }
}

class Sky extends Item{

    printItemStatement(color){
        console.log(`I'm Sky! I'm sometimes ${color}`);
    }
}

class Salt extends Item{

    printItemStatement(color){
        console.log(`I'm Salt! I'm sometimes ${color}`);
    }
}

class Apple extends Item{

    printItemStatement(color){
        console.log(`I'm Apple! I'm sometimes ${color}`);
    }
}

module.exports = { Banana, Blood, Ink, Apple, Frog, Salt, Sky }