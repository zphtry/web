// creates observable from iterable, arrays, generators

{
  Rx.Observable.from([10, 20, 30])
  .subscribe(x => console.log(x));
}

{
  function* gen(seed) {
    while (true)
      yield seed += 2;
  }

  Rx.Observable
  .from(gen(4))
  .take(100)
  .subscribe(x => console.log(x));
}