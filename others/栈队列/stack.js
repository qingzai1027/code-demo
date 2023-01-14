
function Stack() {
    // this.items = [];
    

    Stack.prototype.push = function (element) {
        this.items.push(element);  
    }

    Stack.prototype.pop = function () {
        return this.items.pop()
    }

    Stack.prototype.peek = function (){
        return this.items[this.items.length -1]
    }

    Stack.prototype.size = function (){
        return this.items.length
    }

}
var s = new Stack();
s.push(20)
s.push(100)
s.push(200)
console.log(s.peek())
console.log(s.size())
console.log(s.pop())
console.log(s.peek())
console.log(s.size())
// // console.log(s.push())

