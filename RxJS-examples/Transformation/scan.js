// just like reduce
Rx.Observable
.fromEvent(document, 'click')
.scan((acc, one) => acc + 1, 0)
.subscribe(x => console.log(x));