(function() {
  var lastEl = null; //last selected element
//https://makandracards.com/makandra/46962-javascript-bookmarklet-to-click-an-element-and-copy-its-text-contents
  var /*overlay*/ ov = document.createElement('div');
  Object.assign(ov.style, {
    position: 'fixed',
    top: 0, left: 0, width: '100vw', height: '100vh',
    zIndex: 99999999,
    background: 'transparent',
    cursor: 'crosshair'
  });
  document.body.append(ov);

  function getEl(ev) {
    ov.style.pointerEvents = 'none';
    var el = document.elementFromPoint(ev.clientX, ev.clientY);
    if (ev.shiftKey) {
      var el0 = el, i=4; //4-1=3 parents up
      while ((el0) && (i--)) {el = el0; el0 = el.parentElement;}
    }
    ov.style.pointerEvents = 'auto';
    return el;
  }

  document.addEventListener('mousemove', function(ev) {
    var el = getEl(ev);
    if (!el) return;
    lastEl = el;
    var /*position*/ po = el.getBoundingClientRect();
    Object.assign(ov.style, {
      background: 'rgba(0, 128, 255, 0.25)',
      outline: '1px solid rgba(0, 128, 255, 0.5)',
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
    document.body.removeChild(ov);
    navigator.clipboard.writeText(tx);
  });
})();