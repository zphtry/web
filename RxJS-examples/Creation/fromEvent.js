Rx.Observable
.fromEvent(document, 'click')
.subscribe(() => console.log('Click!'))