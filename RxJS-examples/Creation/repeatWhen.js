// repeats when observable inside emits value
const click = Rx.Observable
.fromEvent(document, 'click');

Rx.Observable
.create((observer) => {
  observer.next(1);
  observer.next(4);
  observer.complete();
})
.repeatWhen(x => click)
.subscribe(x => console.log(x));