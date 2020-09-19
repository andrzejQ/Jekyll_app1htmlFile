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

//https://stackoverflow.com/questions/2044616/select-a-complete-table-with-javascript-to-be-copied-to-clipboard
  function cpToClp2 (el) {    
    var aux = document.createElement('div');
    aux.setAttribute("contentEditable", "true");
    aux.innerHTML = el.outerHTML;
    aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
    document.body.appendChild(aux);
    aux.focus();
    document.execCommand('copy');
    document.body.removeChild(aux);
  }

  ov.addEventListener('click', function(ev) {
    var el = lastEl || getEl(ev);
    document.body.removeChild(ov);
    cpToClp2(el);
  });
})();