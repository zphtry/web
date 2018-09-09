Rx.Observable
// defer interval
.timer(3000, 1000)
.subscribe(x => console.log(x));