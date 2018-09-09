// emits complete
Rx.Observable
.empty()
.subscribe(
  x => console.log(x),
  e => console.log(x),
  () => console.log('Completed!'));