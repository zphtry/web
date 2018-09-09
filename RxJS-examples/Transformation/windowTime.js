// counts clicks every three seconds
Rx.Observable
.fromEvent(document, 'click')
.windowTime(3000)
.mergeMap(win => win.count()) 
.subscribe(x => console.log(x));