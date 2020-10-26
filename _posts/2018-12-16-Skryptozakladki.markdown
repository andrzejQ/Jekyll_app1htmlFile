---
layout: post
title:  "Skryptozakładki"
date:   2020-09-18 10:21:59 +0100
categories: jekyll onefileapp
---
[**Skryptozakładki**](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka) to małe 1-wierszowe aplikacje Javascript, które można umieszczać w pasku zakładek swojej przeglądarki internetowej - **przeciągając wybraną skryptozakładkę do paska zakładek**.

Dla testu można klikać na zakładki wewnątrz tego tekstu i obserwować działanie, np. [\[B/W\]](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: .favlet}. **Przywrócenie** pierwotnej strony: **[F5]** lub [Ctrl+F5] (dogłębne przeładowanie strony).

Tutaj kilka przykładów stworzonych na doraźne potrzeby.

#### 1. Kilka skryptozakładek ...

z wielu przykładów, które można znaleźć m.in. na  
[100+ Useful Bookmarklets](https://www.hongkiat.com/blog/100-useful-bookmarklets-for-better-productivity-ultimate-list/),   
[7is7.com_Bookmarklets](http://7is7.com/software/bookmarklets/),  
[bookmarklets.org](http://bookmarklets.org/):
- możliwość edycji stron www wyświetlanych w przeglądarce (dopisywanie / usuwanie tekstu / usuwanie obrazków) [\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet},
- zmiana kontrastu tekstu na czarno na białym: [\[B/W\]](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: .favlet}.

#### 2. **Kopiowanie fragmentów strony www** (b1)

Kopiowanie może być utrudnione w rozbudowanych aplikacjach. Może też być trudność w kopiowaniu tabel - gdy mamy niezbyt starannie napisaną stronę www z tabelami zawierającymi komórki wypełnione kolejnymi tabelami, to może pomóc ich skopiowanie do Excela czy Worda, gdzie można je dalej przetwarzać.  
Poniższe skrytozakładki oznaczają obszar strony podczas poruszaniu nad nią myszą. Przytrzymując `Shift` podczas poruszania myszą oznaczane są obszary o 3 poziomy wyżej - co jest przydatne podczas zaznaczania całych tabel. Po kliknięciu kopiują oznaczony obszar do schowka.

- Skryptozakładka
[\[ovHsrc\]](javascript:(function(){var d=document;var lastEl=null;var ov=d.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});d.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=d.elementFromPoint(ev.clientX,ev.clientY);if(ev.shiftKey){var el0=el,i=4;while((el0)&&(i--)){el=el0;el0=el.parentElement;}} ov.style.pointerEvents='auto';return el;} d.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;lastEl=el;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0,128,255,0.25)',outline:'1px solid rgba(0,128,255,0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});ov.addEventListener('click',function(ev){var tx=(lastEl||getEl(ev)).outerHTML;d.body.removeChild(ov);if(!(ev.ctrlKey)){navigator.clipboard.writeText(tx);}else{lastEl.remove();}});})()){: .favlet}
kopiuje tekst źródła html oznaczonego obszaru 
<small>([ovHsrc.js]({{ site.url }}{{ site.baseurl }}/download/ovHsrc.js.html))</small>.
Można go skopiować do notatnika i zapisać jako `*.html`, po czym otworzyć w przeglądarce internetowej i dalej kopiować do aplikacji biurowych.  
- Skryptozakładki
[\[ovCp1\]](javascript:(function(){var d=document;var lastEl=null;var ov=d.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});d.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=d.elementFromPoint(ev.clientX,ev.clientY);if(ev.shiftKey){var el0=el,i=4;while((el0)&&(i--)){el=el0;el0=el.parentElement;}} ov.style.pointerEvents='auto';return el;} d.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;lastEl=el;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0,128,255,0.25)',outline:'1px solid rgba(0,128,255,0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});function cpToClp1(el){window.getSelection().removeAllRanges();var range=d.createRange();range.selectNode(el);window.getSelection().addRange(range);d.execCommand('copy');window.getSelection().removeAllRanges();} ov.addEventListener('click',function(ev){var el=lastEl||getEl(ev);d.body.removeChild(ov);if(!(ev.ctrlKey)){cpToClp1(el);}else{lastEl.remove();}});})()){: .favlet}
,
[\[ovCp2\]](javascript:(function(){var d=document;var lastEl=null;var ov=d.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});d.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=d.elementFromPoint(ev.clientX,ev.clientY);if(ev.shiftKey){var el0=el,i=4;while((el0)&&(i--)){el=el0;el0=el.parentElement;}} ov.style.pointerEvents='auto';return el;} d.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;lastEl=el;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0,128,255,0.25)',outline:'1px solid rgba(0,128,255,0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});function cpToClp2(el){var x=window.scrollX,y=window.scrollY;var aux=d.createElement('div');aux.setAttribute("contentEditable","true");aux.innerHTML=el.outerHTML;aux.setAttribute("onfocus","document.execCommand('selectAll',false,null)");d.body.appendChild(aux);aux.focus();d.execCommand('copy');d.body.removeChild(aux);window.scrollTo(x,y);} ov.addEventListener('click',function(ev){var el=lastEl||getEl(ev);d.body.removeChild(ov);if(!(ev.ctrlKey)){cpToClp2(el);}else{lastEl.remove();}});})()){: .favlet} 
kopiują treść oznaczonego obszaru, którą można wkleić wprost do aplikacji biurowych
<small>([ovCp1.js]({{ site.url }}{{ site.baseurl }}/download/ovCp1.js.html), [ovCp2.js]({{ site.url }}{{ site.baseurl }}/download/ovCp2.js.html) - poprawiona wersja 24.10.2020)</small>.
Można próbować te różne wersje w różnych przeglądarkach (nie zawsze działają skutecznie).
	* Uwagi:
		* [Ctrl]+klik - zamiast skopiowania następuje usunięcie obszaru z aktualnego widoku, np. zbędnego obszaru, denerwującej animacji
		* `ovHsrc` działa stosunkowo skutecznie nawet na stronach z zablokowanym zaznaczaniem/kopiowaniem. Jest praktycznie odpowiednikiem operacji "Zbadaj element" \ "kopiuj zewnętrzny html"
		* `ovCp1` - często skuteczna, ale raczej nie działa na zablokowanych stronach
		* `ovCp2` - [nie działa w FF](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content#Security); gdy już działa to raczej działa na zablokowanych stronach (np. w Chrome).
	* test kopiowania:  
	kliknij na skryptozakładkę z p.3 i przesuwaj kursor myszy na poniższym obszarem (przytrzymuj też [Shift]); na koniec kliknij (następuje skopiowanie do schowka) i wklej w aplikacji biurowej;
		- **pogrubienie**, *pochylenie*, ~~przekreślenie~~
		- lista spraw i tabela (można próbować kopiowania także treści nad tabelą razem z całą tabelą)

<p></p>
- [x] coś
	- [ ] tam
	- [x] trzeba
- [ ] zrobić


nagłówek | tabeli | z formatowaniem
---------|-------:|:---------------:
  0      |      1 | **2**
  3      | 4      | *5*


#### 3. Konwersja strony HTML na Markdown (b1, i1)

Z pomocą konwertera HTML -> Markdown "**turndown**" (<https://github.com/domchristie/turndown>) autorstwa Dom Christie 
można konwertować całe strony HTML na dokument Markdown.  
[\[TD-\]](javascript:Promise.all([import('https://unpkg.com/turndown?module'),import('https://unpkg.com/@tehshrike/readability@0.2.0'),]).then(async([{default:TDs},{default:Rdby}])=>{const{title,byline,content}=new Rdby(document.cloneNode(true)).parse();const tdPlg=await import('https://unpkg.com/turndown-plugin-gfm?module');const tdSrv=new TDs({headingStyle:'atx',hr:'- - -',bulletListMarker:'*',codeBlockStyle:'fenced',emDelimiter:'_',});tdSrv.use(tdPlg.gfm);const markdown=tdSrv.turndown(content);const roamText=`* [${title}](${document.URL})\n\n${markdown}`;document.body.innerHTML='<pre></pre>';document.body.children[0].innerText=roamText;})){: .favlet} 
to skryptozakładka z przykładu na
[reddit.com](https://www.reddit.com/r/RoamResearch/comments/hsitd3/bookmarklet_copy_all_the_page_content_to_the/#CommentTopMeta--Created--t1_fz0j2r4)
z włączonymi dodatkami (table, listy zadań, ...)
<small>([TurnDownAll.js]({{ site.url }}{{ site.baseurl }}/download/TurnDownAll.js.html))</small>. Po kliknięciu skryptozakładki strona zmienia się w swój tekst Markdown - można sbie skopiować dowolny fragment. Na koniec [F5].  
Nie zawsze to działa idealnie...

#### 4. JOOMLA galeria SIGPLUS (b1)

Skryptozakładka dla edytora HTML w JOOMLA z dodatkiem SIGPLUS [\[sig+\]](javascript:void%20function(){var%20e=document.querySelector(%22textarea%23jform_articletext%22);if(!e)return%20void%20alert(%221.%20Coś%20jest%20nie%20tak%20\n%20-%20musisz%20być%20w%20trybie%20edycji%20html%22);document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click();var%20t=e.value,r=t.replace(/%3Cimg%20src=%22images\/(.*%3F)\/[^/]+\/%3E/,'{gallery%20maxcount=1%20alignment=%22after-float%22%20preview_width=120%20preview_height=160}$1{/gallery}');return%20r===t%3Fvoid%20alert(%222.%20Coś%20jest%20nie%20tak%20\n%20-%20może%20nie%20ma%20wstawionego%20obrazka...\n%20-%20a%20może%20edytor%20nie%20jest%20trybie%20HTML%22):(e.value=r,void%20document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click())}();){: .favlet} zamienia pierwsze napotkane łącze obrazka `<img src="images...` na łącze galerii obrazów `{gallery.../gallery}` umieszczonych w tym samym folderze co `<img`.  
Należy więc do swojego dokumentu Joomla wstawić jakikolwiek obrazek z foldera, który zawiera obrazy do galerii i kliknąć `[sig+]`.  
<small>(Zob. też [plik źródłowy img2sigplus.js]({{ site.url }}{{ site.baseurl }}/download/img2sigplus.js.html) )</small>


<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px}</style>

