//accumulate values in list
Rx.Observable
.interval(1000)
// buffer size / update interval
.bufferCount(6, 2)
.subscribe(x => console.log(x));