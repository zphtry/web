//emits value every second
Rx.Observable
.interval(1000)
.subscribe(x => console.log(x));