// возращает значение парами начиная со второго
Rx.Observable
.fromEvent(document, 'click')
.pairwise()
.map(pair => {
  const x0 = pair[0].clientX;
  const y0 = pair[0].clientY;
  const x1 = pair[1].clientX;
  const y1 = pair[1].clientY;
  return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
})
.subscribe(x => console.log(x));