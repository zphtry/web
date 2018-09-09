//passes clicks only in one second
Rx.Observable
.fromEvent(document, 'click')
.window(Rx.Observable.timer(1000))
.mergeAll() // flatten the Observable-of-Observables
.subscribe(x => console.log(x));