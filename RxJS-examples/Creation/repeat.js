//repeats observer which complets
Rx.Observable
.create((observer) => {
  observer.next(1);
  observer.next(4);
  observer.complete();
})
.repeat(2)
.subscribe(x => console.log(x));