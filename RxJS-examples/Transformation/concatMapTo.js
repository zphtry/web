// just like concatMap, but it directly maps to original observable without callback
Rx.Observable
.fromEvent(document, 'click')
.concatMapTo(Rx.Observable.interval(1000).take(4))
.subscribe(x => console.log(x));