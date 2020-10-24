//Move mouse over and click = copy;  Ctrl+click=del; Shift+move: 3 nodes up
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

//https://stackoverflow.com/questions/2044616/select-a-complete-table-with-javascript-to-be-copied-to-clipboard
  function cpToClp2 (el) {
    var x = window.scrollX, y = window.scrollY;
    var aux = d.createElement('div');
    aux.setAttribute("contentEditable", "true");
    aux.innerHTML = el.outerHTML;
    aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
    d.body.appendChild(aux);
    aux.focus();
    d.execCommand('copy');
    d.body.removeChild(aux);
    window.scrollTo(x,y);
  }

  ov.addEventListener('click', function(ev) {
    var el = lastEl || getEl(ev);
    d.body.removeChild(ov);
    if (!(ev.ctrlKey)) {cpToClp2(el);} else {lastEl.remove();}
  });
})()