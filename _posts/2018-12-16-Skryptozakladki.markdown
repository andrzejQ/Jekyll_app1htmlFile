---
layout: post
title:  "Skryptozakładki"
date:   2020-09-18 10:21:59 +0100
categories: jekyll onefileapp
---
[Skryptozakładki](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka) to małe 1-wierszowe aplikacje Javascript, które można umieszczać w pasku zakładek swojej przeglądarki internetowej.

Można też klikać na zakładki wewnątrz tego tekstu i obserwować działanie, np. [\[B/W\]](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: .favlet}.

Tutaj kilka przykładów stworzonych na doraźne potrzeby.

1. **sig+** (b1)
- skryptozakładka dla edytora HTML w JOOMLA z dodatkiem SIGPLUS [\[sig+\]](javascript:void%20function(){var%20e=document.querySelector(%22textarea%23jform_articletext%22);if(!e)return%20void%20alert(%221.%20Coś%20jest%20nie%20tak%20\n%20-%20musisz%20być%20w%20trybie%20edycji%20html%22);document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click();var%20t=e.value,r=t.replace(/%3Cimg%20src=%22images\/(.*%3F)\/[^/]+\/%3E/,'{gallery%20maxcount=1%20alignment=%22after-float%22%20preview_width=120%20preview_height=160}$1{/gallery}');return%20r===t%3Fvoid%20alert(%222.%20Coś%20jest%20nie%20tak%20\n%20-%20może%20nie%20ma%20wstawionego%20obrazka...\n%20-%20a%20może%20edytor%20nie%20jest%20trybie%20HTML%22):(e.value=r,void%20document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click())}();){: .favlet} zamienia pierwsze napotkane łącze obrazka `<img src="images...` na łącze galerii obrazów `{gallery.../gallery}` umieszczonych w tym samym folderze co `<img`. (Zob. też [plik źródłowy]({{ site.url }}{{ site.baseurl }}/download/img2sigplus.js.html) )

2. Kilka skryptozakładek, które można znaleźć m.in. na  [100+ Useful Bookmarklets](https://www.hongkiat.com/blog/100-useful-bookmarklets-for-better-productivity-ultimate-list/), [
7is7.com_Bookmarklets](http://7is7.com/software/bookmarklets/), [bookmarklets.org](http://bookmarklets.org/):
- możliwość edycji stron www wyświetlanych w przeglądarce (dopisywanie / usuwanie tekstu / usuwanie obrazków) [\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet},
- zmiana kontrastu tekstu na czarno na białym: [\[B/W\]](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: .favlet}.

3. **Kopiowanie fragmentów strony www** (b1)  
Kopiowanie może być utrudnione w rozbudowanych aplikacjach. Może też być trudność w kopiowaniu tabel - gdy mamy niezbyt starannie napisaną stronę www z tabelami zawierającymi komórki wypełnione kolejnymi tabelami, to może pomóc ich skopiowanie do Excela czy Worda, gdzie można je dalej przetwarzać.  
Poniższe skrytozakładki oznaczają obszar strony podczas poruszaniu nad nią myszą, a po kliknięciu kopiują ten obszar do schowka
- skryptozakładka
[\[ovHsrc\]](javascript:(function(){var ov=document.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});document.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=document.elementFromPoint(ev.clientX,ev.clientY);ov.style.pointerEvents='auto';return el;} document.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0, 128, 255, 0.25)',outline:'1px solid rgba(0, 128, 255, 0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});ov.addEventListener('click',function(ev){var tx=getEl(ev).outerHTML;document.body.removeChild(ov);navigator.clipboard.writeText(tx);});})()){: .favlet}
kopiuje tekst źródła html oznaczonego obszaru 
([ovHsrc.js]({{ site.url }}{{ site.baseurl }}/download/ovHsrc.js.html)).
Można go skopiować do notatnika i zapisać jako `*.html`, po czym otworzyć w przeglądarce internetowej i dalej kopiować do aplikacji biurowych.
- skryptozakładki
[\[ovCp1\]](javascript:(function(){var ov=document.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});document.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=document.elementFromPoint(ev.clientX,ev.clientY);ov.style.pointerEvents='auto';return el;} document.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0, 128, 255, 0.25)',outline:'1px solid rgba(0, 128, 255, 0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});function cpToClp1(el){window.getSelection().removeAllRanges();var range=document.createRange();range.selectNode(el);window.getSelection().addRange(range);document.execCommand('copy');window.getSelection().removeAllRanges();} ov.addEventListener('click',function(ev){var el=getEl(ev);document.body.removeChild(ov);cpToClp1(el);});})()){: .favlet}
,
[\[ovCp2\]](javascript:(function(){var ov=document.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});document.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=document.elementFromPoint(ev.clientX,ev.clientY);ov.style.pointerEvents='auto';return el;} document.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0, 128, 255, 0.25)',outline:'1px solid rgba(0, 128, 255, 0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});function cpToClp2(el){var aux=document.createElement('div');aux.setAttribute("contentEditable",true);aux.innerHTML=el.outerHTML;aux.setAttribute("onfocus","document.execCommand('selectAll',false,null)");document.body.appendChild(aux);aux.focus();document.execCommand('copy');document.body.removeChild(aux);} ov.addEventListener('click',function(ev){var el=getEl(ev);document.body.removeChild(ov);cpToClp2(el);});})()){: .favlet} 
kopiują treść oznaczonego obszaru
([ovCp1.js]({{ site.url }}{{ site.baseurl }}/download/ovCp1.js.html), [ovCp2.js]({{ site.url }}{{ site.baseurl }}/download/ovCp2.js.html))
, którą można go skopiować wprost do aplikacji biurowych. 
Można próbować różne wersje i różne przeglądarki - nie zawsze jest to skuteczne.
		* test kopiowania:  
		kliknij na skryptozakładkę z p.3 i przesuwaj kursor myszy na poniższym obszarem;  
		kliknij (następuje skopiowanie do schowka) i wklej w aplikacji biurowej;
			- **pogrubienie**, *pochylenie*, ~~przekreślenie~~
			- lista spraw:
				- [x] coś
					- [ ] tam
					- [x] trzeba
				- [ ] zrobić
			- tabela (często trzeba skopiować także treść nad tabelą razem z całą tabelą)

nagłówek | tabeli | z formatowaniem
---------|-------:|:---------------:
  0      |      1 | **2**
  3      | 4      | *5*


<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px}</style>

