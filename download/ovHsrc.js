//Move mouse over and click = copy outer HTML;  Ctrl+click=del; Shift+move: 3 nodes up
//javascript:
(function() {
  var d=document;
  var lastEl = null; //last selected element
//https://makandracards.com/makandra/46962-javascript-bookmarklet-to-click-an-element-and-copy-its-text-contents
  var /*overlay*/ ov = d.createElement('div');
  Object.assign(ov.style, {
    position: 'fixed',
    top: 0, left: 0, width: '100vw', height: '100vh',
    zIndex: 99999999,
    background: 'transparent',
    cursor: 'crosshair'
  });
  d.body.append(ov);

  function getEl(ev) {
    ov.style.pointerEvents = 'none';
    var el = d.elementFromPoint(ev.clientX, ev.clientY);
    if (ev.shiftKey) {
      var el0 = el, i=4; //4-1=3 parents up
      while ((el0) && (i--)) {el = el0; el0 = el.parentElement;}
    }
    ov.style.pointerEvents = 'auto';
    return el;
  }

  d.addEventListener('mousemove', function(ev) {
    var el = getEl(ev);
    if (!el) return;
    lastEl = el;
    var /*position*/ po = el.getBoundingClientRect();
    Object.assign(ov.style, {
      background: 'rgba(0,128,255,0.25)',
      outline: '1px solid rgba(0,128,255,0.5)',
      top: '' + po.top + 'px',
      left: '' + po.left + 'px',
      width: '' + po.width + 'px',
      height: '' + po.height + 'px'
    });
  });

  ov.addEventListener('click', function(ev) {
    //var tx = getEl(ev).outerHTML;
    //ext = tx.replace(/\n[ \n]+\n/g, "\n").replace(/\n\n+/g, "\n\n").replace(/^\n+|\n+$/g, '');
    //if (!tx.match("\n")) tx = tx.replace(/^ +| +$/, '')
    //window.prompt('Press Ctrl+C to copy', tx);
    var tx = (lastEl || getEl(ev)).outerHTML;
    d.body.removeChild(ov);    if (!(ev.ctrlKey)) {navigator.clipboard.writeText(tx);} else {lastEl.remove();}
  });
})()