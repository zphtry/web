Rx.Observable.interval(100)
.bufferTime(1000)
.subscribe(x => console.log(x));

Rx.Observable.interval(100)
.bufferTime(1000, 2500)
.subscribe(x => console.log(x));