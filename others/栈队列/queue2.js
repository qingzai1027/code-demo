function q2(){
    this.items=[];
    q2.prototype.push = function(element){
        this.items.push(element)
    }
    q2.prototype.shift = function(){
        return this.items.shift()
    }

}

var q = new q2()
q.push(11)
q.push(22)
q.push(33)
console.log(q.shift())