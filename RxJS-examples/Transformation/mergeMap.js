//flattens inner observables and keeping theirs time
Rx.Observable
.of('a', 'b', 'c')
.mergeMap(x =>
  Rx.Observable
  .interval(1000)
  .take(4)
  .map(i => x + i))
.subscribe(x => console.log(x));