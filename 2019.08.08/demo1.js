class Person {
    constructor(name){
      this.name = name
    }
  
    hello(){
      console.log(this.name);
    }
  }
  
  var xiaoMing = new Person('xiaoMing');
  console.log(xiaoMing)
  var liLei = new Person('liLei');
  console.log(liLei)