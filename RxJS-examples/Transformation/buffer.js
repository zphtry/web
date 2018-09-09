//passes old values, when innerssh observable emits
const clicks = Rx.Observable.fromEvent(document, 'click');
Rx.Observable
.interval(1000)
.buffer(clicks)
.subscribe(x => console.log(x));