Rx.Observable
.fromPromise(fetch('http://dev.antitricks.ru:7777/api/base_graphs/'))
.subscribe(x => console.log(x), e => console.error(e));