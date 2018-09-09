// scans and merges
Rx.Observable
.fromEvent(document, 'click')
.mergeScan(acc => Rx.Observable.of(acc + 1), 0)
.subscribe(x => console.log(x));