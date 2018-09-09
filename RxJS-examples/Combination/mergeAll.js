// stores all inner observables in one, keep theirs time
Rx.Observable
.fromEvent(document, 'click')
.map(() => Rx.Observable.interval(1000).take(4))
.mergeAll()
.subscribe(x => console.log(x));