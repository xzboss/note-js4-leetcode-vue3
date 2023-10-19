//instanceof
function myInstanceof(target, type){
    let proto = Object.getPrototypeOf(target)
    while(proto){
        if(proto === Object.getPrototypeOf(type)){
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false
}
console.log(myInstanceof(1,Object),1 instanceof Number, Object.toString === Object.prototype.toString)

//class instanceof
class Person {
    static [Symbol.hasInstance](op) {
        return op.__proto__ === this.prototype // 结果会自动转化为 boolean
    }
    constructor(name) { 
        this.name = name
    }
}
const person = new Person('xz')
console.log(person instanceof Person)

