//transforms stream of events in stream of observables, which has size as argument
Rx.Observable
.fromEvent(document, 'click')
.windowCount(3)
.mergeMap(win => win.skip(1)) // skip first of every 3 clicks
.subscribe(x => console.log(x));