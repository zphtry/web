// bindCallback return function, which returns Observable, value passing through callb
Rx.Observable
.bindCallback((arg1, arg2, sender) => sender(arg1 + arg2))(4,5)
.subscribe(value => {
  console.log(value)
});
