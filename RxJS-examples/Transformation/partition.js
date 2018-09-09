//separates observable on twos by condition
let parts = Rx.Observable
.fromEvent(document, 'click')
.partition(ev => ev.target.tagName === 'DIV');
parts[0].subscribe(x => console.log('DIV clicked: ', x));
parts[1].subscribe(x => console.log('Other clicked: ', x));