// For each click event, tick every second from 0 to 3, with no concurrency
// flattens all inner observable to one 'line'
// the situation when you have observable of observables
Rx.Observable
.fromEvent(document, 'click')
.map(() => Rx.Observable.interval(1000).take(4))
.concatAll()
.subscribe(x => console.log(x));