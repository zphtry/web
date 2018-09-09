//do not let new inner observable until old one is completing
Rx.Observable
.fromEvent(document, 'click')
.map((ev) => Rx.Observable.interval(1000).take(4))
.exhaust()
.subscribe(x => console.log(x));