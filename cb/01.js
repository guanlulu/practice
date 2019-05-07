var events = require('events')
function CarShow() {
    events.EventEmitter.call(this) // 继承EventEmitter功能
    this.seeCar = function (make) {
        this.emit('sawCar',make)
    }
}
CarShow.prototype.__proto__ = events.EventEmitter.prototype
var show = new CarShow()

function logCar(make) {
    console.log("Saw a "+make)
}
function logColorCar(make,color) {
    console.log("Saw a %s %s ", color, make)
}

show.on("sawCar", logCar);
show.on("sawCar", function (make) {
    var colors = ["red", "blue", "black", "pink", "green"];
    var color = colors[Math.floor(Math.random()*3)];
    logColorCar(make, color);
});

show.seeCar("Ferrari");
show.seeCar("Porsche");
show.seeCar("Bugatti");


BCCSDK.init(options,cb)
BCCSDK.register(options)
BCCSDK.login(cb)
BCCSDK.call(phone,cb)
BCCSDK.hangup(cb)
BCCSDK.logout(cb)