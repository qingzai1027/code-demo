function queue() {
    var items = [];
    this.enqueue = function (element) {
        items.push(element)
    }
    this.shift = function () {
        return items.shift()
    }

} var q = new queue()
    q.enqueue(30)
    q.enqueue(40)
    q.enqueue(50)
    console.log(q.shift())



