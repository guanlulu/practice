const person = {
    name: 'tom',
    getName: () => {
        console.log(this) // window
        return this.name
    }
}
const person = {
    name: 'Tom',
    getName: function() {
        console.log(this)  // person
        return this.name
    }
}