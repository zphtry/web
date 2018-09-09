//ordinary map with further flattens of inner observables using concatAll
Rx.Observable
.fromEvent(document, 'click')
.concatMap(() => Rx.Observable.interval(1000).take(4))
.subscribe(x => console.log(x));