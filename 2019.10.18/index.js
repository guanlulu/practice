var obj = {
    say: () => {
        return 2
    }
} 
function f() {
    function f1() {
        return this.say()
    }
    // return f1.apply(obj)
    return f1.call(obj)
}