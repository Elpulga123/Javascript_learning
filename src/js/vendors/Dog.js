function Cat() {
    this.stomach = [];
    this.feet = 0;
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse)
}

Cat.prototype.feet = function(num){
    this.feet = num;
}

module.exports = Cat;