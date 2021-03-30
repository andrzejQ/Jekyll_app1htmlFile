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
