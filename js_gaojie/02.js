function GameObject() {
    
}

GameObject.prototype = {

    constructor: GameObject
};

function Spaceship() {
    
}

Spaceship.prototype = GameObject.prototype;
Spaceship.prototype.constructor = Spaceship;

console.log(GameObject.prototype.constructor === Spaceship);
