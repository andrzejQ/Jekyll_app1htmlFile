(function() {
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
    ov.style.pointerEvents = 'auto';
    return el;
  }

  document.addEventListener('mousemove', function(ev) {
    var el = getEl(ev);
    if (!el) return;
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

//https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html/34192073
  function cpToClp1 (el) {  
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(el);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  
  ov.addEventListener('click', function(ev) {
    var el = getEl(ev);
    document.body.removeChild(ov);
    cpToClp1(el);
  });
})();