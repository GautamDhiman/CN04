const { Banana, Blood, Ink, Apple, Frog, Salt, Sky } = require('./GameJs/object')

const availableItems = {
    banana: Banana,
    blood : Blood,
    ink: Ink,
    frog: Frog,
    sky: Sky,
    salt: Salt,
    apple: Apple
}

class ItemFactory{

    makeItem(item){
        let buildItem = new availableItems[item]();
        return buildItem;
    }

}

module.exports = {ItemFactory}