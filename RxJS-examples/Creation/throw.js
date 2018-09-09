// emits error
Rx.Observable
.throw(new Error('oops!'))
.subscribe(
  x => console.log(x),
  e => console.error(e));