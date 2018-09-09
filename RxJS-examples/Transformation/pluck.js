// like map, but picks properties from object
// more arguments you privide, deeper in object you dive
Rx.Observable
.fromEvent(document, 'click')
.pluck('target', 'tagName')
.subscribe(x => console.log(x));