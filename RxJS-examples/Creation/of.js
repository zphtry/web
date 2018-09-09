//synchronously emits values  from array
Rx.Observable
.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
.subscribe(x => {
  console.log(x)
})