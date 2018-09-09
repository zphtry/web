// yields to observable, which function returns
Rx.Observable
.defer(() => {
  if (Math.random() > 0.5) return Rx.Observable.fromEvent(document, 'click');
  else return Rx.Observable.interval(1000);
})
.subscribe(x => console.log(x));