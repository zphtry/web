// each new emit of external observable, cancels old inner observable and run new one,
// so in each moment you have only one active inner observable
Rx.Observable
.fromEvent(document, 'click')
.switchMap(() => Rx.Observable.interval(1000).take(4))
.subscribe(x => console.log(x));