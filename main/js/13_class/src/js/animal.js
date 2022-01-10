function Animal(nameAnimal) {
    // console.log(nameAnimal)
    this.name = nameAnimal;

    // this.name = function() {
    //     return name;
    // };

    // this.setName = function(newName) {
    //     name = newName;
    // };
}

Animal.prototype.say = function () {

    // setTimeout(function () {
    //     console.log(this.name);
    // }.bind(this), 3000);

    const self = this;

    setTimeout(function () {
        console.log(self.name);
    }, 3000);
}

export default Animal;
