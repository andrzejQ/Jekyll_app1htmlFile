---
layout: post
title:  "Skryptozakładki"
date:   2020-09-18 10:21:59 +0100
categories: jekyll onefileapp
---

[**Skryptozakładki**](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka) to małe 1-wierszowe aplikacje Javascript, które można umieszczać w pasku zakładek swojej przeglądarki internetowej - **przeciągając wybraną skryptozakładkę do paska zakładek** <small>(wideo)</small>.

<video src="{{site.baseurl}}/assets/img/skryptozakladka_do_paska_zakladek.mp4" poster="{{site.baseurl}}/assets/img/skryptozakladka_do_paska_zakladek.jpg" height="200" style="float:right"  controls preload></video>

* [1. Biblioteki skryptozakładek]({{site.url}}{{site.baseurl}}{{page.url}}#1-biblioteki-skryptozakładek-)
* [2. Kopiowanie fragmentów strony www]({{site.url}}{{site.baseurl}}{{page.url}}#2-kopiowanie-fragmentów-strony-www-b1)
* [3. Hurtowe dodawanie członków w MS Teams]({{site.url}}{{site.baseurl}}{{page.url}}#3-hurtowe-dodawanie-członków-w-ms-teams-b1)
* [4. Lista członków grup MS Teams]({{site.url}}{{site.baseurl}}{{page.url}}#4-lista-członków-grup-ms-teams-b1)
* [5. Konwersja strony HTML na Markdown]({{site.url}}{{site.baseurl}}{{page.url}}#5-konwersja-strony-html-na-markdown-b1-i1)
* [6. JOOMLA galeria SIGPLUS]({{site.url}}{{site.baseurl}}{{page.url}}#6-joomla-galeria-sigplus-b1)
* [7. Rozwiń wszystkie szczegóły]({{site.url}}{{site.baseurl}}{{page.url}}#7-rozwiń-wszystkie-szczegóły-b1)
* [n. Skryptozakładki - notatki]({{site.url}}{{site.baseurl}}{{page.url}}#n-skryptozakładki---notatki)

<small>Pasek zakładek (Bookmarks Toolbar) można włączać/wył. w przeglądarce **Google Chrome**, **Firefox** lub w **Microsoft Edge** (Chromium)  za pomocą klawiszy **[Ctrl+Shift+B]**. 


**Przywrócenie** pierwotnej strony po użyciu skryptozakładki:  
**[F5]** lub **[Ctrl+F5]** (dogłębne przeładowanie strony).

<details markdown=1><summary markdown="span">

<b> 1. Biblioteki skryptozakładek </b> <br>         ... 

</summary>

Wiele przykładów, można znaleźć m.in. na  
[100+ Useful Bookmarklets](https://www.hongkiat.com/blog/100-useful-bookmarklets-for-better-productivity-ultimate-list/),   
[7is7.com_Bookmarklets](http://7is7.com/software/bookmarklets/),  
[bookmarklets.org](http://bookmarklets.org/)

</details>

- Możliwość edycji stron www wyświetlanych w przeglądarce (dopisywanie / usuwanie tekstu / usuwanie obrazków) 
  [\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet}, 
  zmiana kontrastu tekstu na czarno na białym: 
  [\[B/W\]](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: .favlet}.
- Przesunięcie strony w lewo (aby potem skorzystać z dodatku "WAVE Evaluation Tool", które wysuwa ją w prawo)
  [\[m-190\]](javascript:(()=>{document.body.setAttribute('style','margin-left:-190px;');})();){: .favlet}. 
  Natomiast skryptozakładka (jQuery)
  [\[main\]](javascript:(()=>{let s1='div.right-side';let $c1=$(s1);$c1.css({'padding-left':'20px','width':'calc(100% - 500px)'});$('body').html('<main><h1>'+$(document).attr('title')+'</h1><p>'+$(location).attr('href')+'</p></main>');$('main').append($c1);})();){: .favlet}
  wydziela fragment strony - tu z selektorem `div.right-side`, ten fragment można potem poddać audytowi dostępności, np. z pomocą WAVE Evaluation Tool co pozwala skupiać się na części zależnej od redaktora. Selektor można sobie edytować w zakładce.
{: style="font-size: smaller;"}


<details markdown=1><summary markdown="span">

<b> 2. Kopiowanie fragmentów strony www</b> (b1) <br>          ...      <small>(w tym całych tabel; także wyłączanie denerwujących animacji)</small>

</summary>

Kopiowanie może być utrudnione w rozbudowanych aplikacjach. Może też być trudność w kopiowaniu tabel - gdy mamy niezbyt starannie napisaną stronę www z tabelami zawierającymi komórki wypełnione kolejnymi tabelami, to może pomóc ich skopiowanie do Excela czy Worda, gdzie można je dalej przetwarzać.  
Poniższe skrytozakładki oznaczają obszar strony podczas poruszaniu nad nią myszą. Przytrzymując `Shift` podczas poruszania myszą oznaczane są obszary o 3 poziomy wyżej - co jest przydatne podczas zaznaczania całych tabel. Po kliknięciu kopiują oznaczony obszar do schowka.

- Skryptozakładka
[\[ovHsrc\]](javascript:(function(){var d=document;var lastEl=null;var ov=d.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});d.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=d.elementFromPoint(ev.clientX,ev.clientY);if(ev.shiftKey){var el0=el,i=4;while((el0)&&(i--)){el=el0;el0=el.parentElement;}} ov.style.pointerEvents='auto';return el;} d.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;lastEl=el;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0,128,255,0.25)',outline:'1px solid rgba(0,128,255,0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});ov.addEventListener('click',function(ev){var tx=(lastEl||getEl(ev)).outerHTML;d.body.removeChild(ov);if(!(ev.ctrlKey)){navigator.clipboard.writeText(tx);}else{lastEl.remove();}});})()){: .favlet}
kopiuje tekst źródła html oznaczonego obszaru 
<small>([ovHsrc.js]({{site.url}}{{site.baseurl}}/download/ovHsrc.js.html))</small>.
Można go skopiować do notatnika i zapisać jako `*.html`, po czym otworzyć w przeglądarce internetowej i dalej kopiować do aplikacji biurowych.  
- Skryptozakładki
[\[ovCp1\]](javascript:(function(){var d=document;var lastEl=null;var ov=d.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});d.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=d.elementFromPoint(ev.clientX,ev.clientY);if(ev.shiftKey){var el0=el,i=4;while((el0)&&(i--)){el=el0;el0=el.parentElement;}} ov.style.pointerEvents='auto';return el;} d.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;lastEl=el;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0,128,255,0.25)',outline:'1px solid rgba(0,128,255,0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});function cpToClp1(el){window.getSelection().removeAllRanges();var range=d.createRange();range.selectNode(el);window.getSelection().addRange(range);d.execCommand('copy');window.getSelection().removeAllRanges();} ov.addEventListener('click',function(ev){var el=lastEl||getEl(ev);d.body.removeChild(ov);if(!(ev.ctrlKey)){cpToClp1(el);}else{lastEl.remove();}});})()){: .favlet}
,
[\[ovCp2\]](javascript:(function(){var d=document;var lastEl=null;var ov=d.createElement('div');Object.assign(ov.style,{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:99999999,background:'transparent',cursor:'crosshair'});d.body.append(ov);function getEl(ev){ov.style.pointerEvents='none';var el=d.elementFromPoint(ev.clientX,ev.clientY);if(ev.shiftKey){var el0=el,i=4;while((el0)&&(i--)){el=el0;el0=el.parentElement;}} ov.style.pointerEvents='auto';return el;} d.addEventListener('mousemove',function(ev){var el=getEl(ev);if(!el)return;lastEl=el;var po=el.getBoundingClientRect();Object.assign(ov.style,{background:'rgba(0,128,255,0.25)',outline:'1px solid rgba(0,128,255,0.5)',top:''+po.top+'px',left:''+po.left+'px',width:''+po.width+'px',height:''+po.height+'px'});});function cpToClp2(el){var x=window.scrollX,y=window.scrollY;var aux=d.createElement('div');aux.setAttribute("contentEditable","true");aux.innerHTML=el.outerHTML;aux.setAttribute("onfocus","document.execCommand('selectAll',false,null)");d.body.appendChild(aux);aux.focus();d.execCommand('copy');d.body.removeChild(aux);window.scrollTo(x,y);} ov.addEventListener('click',function(ev){var el=lastEl||getEl(ev);d.body.removeChild(ov);if(!(ev.ctrlKey)){cpToClp2(el);}else{lastEl.remove();}});})()){: .favlet} 
kopiują treść oznaczonego obszaru, którą można wkleić wprost do aplikacji biurowych
<small>([ovCp1.js]({{site.url}}{{site.baseurl}}/download/ovCp1.js.html), [ovCp2.js]({{site.url}}{{site.baseurl}}/download/ovCp2.js.html) - poprawiona wersja 24.10.2020)</small>.
	* Uwagi:
		* **[Ctrl]+klik** - zamiast skopiowania następuje usunięcie obszaru z aktualnego widoku, np. denerwującej animacji
		* `ovHsrc` działa stosunkowo skutecznie nawet na stronach z zablokowanym zaznaczaniem/kopiowaniem. Jest praktycznie odpowiednikiem operacji "Zbadaj element" \ "kopiuj zewnętrzny html"
		* `ovCp1` - często skuteczna, ale raczej nie działa na zablokowanych stronach
		* `ovCp2` - [nie działa w FF](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content#Security); gdy już działa to raczej działa na zablokowanych stronach (np. w Chrome).
	* test kopiowania:  
	kliknij na skryptozakładkę z p.3 i przesuwaj kursor myszy na poniższym obszarem (przytrzymuj też [Shift]); na koniec kliknij (następuje skopiowanie do schowka) i wklej w aplikacji biurowej;
		- **pogrubienie**, *pochylenie*, ~~przekreślenie~~
		- lista spraw i tabela (można próbować kopiowania także treści nad tabelą razem z całą tabelą)

nagłówek | tabeli | z formatowaniem
---------|-------:|:---------------:
  0      |      1 | **2**
  3      | 4      | *5*
  
<style>table{float:right;width:50%} ul>li ul>li ul{font-size:smaller;}</style>

<p> &nbsp; </p>
- [x] coś
	- [ ] tam
	- [x] trzeba
- [ ] zrobić
<p> &nbsp; </p>

</details>


#### **3.** <s>Hurtowe dodawanie członków w **MS Teams**</s> (b1)
{: style="margin-top:15px;"}

<details markdown=1><summary markdown="span" style="color:red">

2024-11-15: <b> Uwaga to już nie działa ! </b> <br>         ... 

</summary>

<small> (2023-10-05. UWAGA - to bardzo wczesna wersja skryptozakładki. Można sobie modyfikować kod źródłowy 
[**addTeamsMb.js**]({{site.url}}{{site.baseurl}}/download/addTeamsMb.js.html)
, poddawać minimalizacji, np. w Notatniku++/JSTool i edytując zakładkę wkleić jako nową treść</small>

1. Przeciągnij skryptozkładkę 
[\[TeamsMb\]](javascript:(()=>{const dely=1000;const liSep=/[,;\s]+/;const uTst=/.@.../;const lang=(document.documentElement.lang.startsWith('pl'))?1:0;const msgOpenW='!\n'+['On https://teams.microsoft.com\n'+'open the window: Add members to team...','Na https://teams.microsoft.com\n'+'otwórz okno: Dodawanie członków do zespołu...'][lang];const msgPrpt=['Paste member list here:','Tu wklej listę członków:'][lang];const msgCdnt='!!\n'+['Could not find/add:','Nie można znaleźć/dodać:'][lang]+'\n!!\n';const sInp='div.ts-people-picker input[data-tid="peoplePicker"]';const sDrop='div[data-tid="peoplepicker-dropdown"]';const sAdd='button.ts-btn[data-tid="createTeam-AddMembers"]';const checkElem=(sel,fnTrue,tmOut=2500)=>{return new Promise((rslv,rjct)=>{setTimeout(()=>{rslv($(''));},tmOut);(async()=>{while(!($(sel).length&&fnTrue(sel))){await new Promise(rslv=>requestAnimationFrame(rslv));};rslv($(sel));})();});};if(!((window.jQuery)&&$(sInp).length)){alert(msgOpenW);return;};try{(async()=>{const users=prompt(msgPrpt).split(liSep);for(const user of users){if(uTst.test(user)){console.log('====='+user);await checkElem(sAdd,(sel)=>$(sel).prop('disabled'));let $inp=$(sInp);$inp.focus().val(user);$inp.change();let selDrop=await checkElem(sDrop,(sel)=>$(sel).text().trim(),7000);if(!selDrop.length)alert(msgCdnt+user);else{$(sInp).trigger({type:'keydown',which:9,keyCode:9});let selAdd=await checkElem(sAdd,(sel)=>!$(sel).prop('disabled'));if(!selAdd.length)alert(msgCdnt+user);else{selAdd.click();$(sInp).focus();await new Promise(rslv=>setTimeout(rslv,dely));await checkElem(sAdd,(sel)=>$(sel).prop('disabled'));}}}}})();}catch(err){alert(err);}})();){: .favlet}
do swojego paska zakładek.  
<small>(kod źródłowy: [addTeamsMb.js]({{site.url}}{{site.baseurl}}/download/addTeamsMb.js.html), propozycje lepszych rozwiązań zgłoś na: [github](https://github.com/andrzejQ/Import-users-to-MS-Teams-))</small>
2. Przygotuj listę adresów e-mail użytkowników (powinni to być nowi użytkownicy), których chcesz dodać do zespołu, np. w kolumnie Excela. Komórki nie zawierające "@" będą pomijane.
3. ![TeamsHurtoweDodawanieCzlonkow.png]({{site.baseurl}}/assets/img/TeamsHurtoweDodawanieCzlonkow.png "TeamsHurtoweDodawanieCzlonkow.png"){: style="float:right;width:50%;"}
Otwórz MS Teams **w przeglądarce**: ![TeamsApp.png]({{site.baseurl}}/assets/img/TeamsApp.png "TeamsApp.png"){: style="width:25px;"} <https://teams.microsoft.com/>. Zaloguj się, i **otwórz okno dodawania członków zespołu** (tak, że można by dodać pojedynczą osobę).
4. Kliknij skryptozakładkę **[TeamsMb]** i wyskakującym oknie wklej listę osób do dodania. Lista może być rozdzielana przecinkami, średnikami lub dowolnymi białymi znakami, w tym nowego wiersza, czyli można ją wprost skopiować np. z kolumny Excela.
5. Po `[OK]` powinno nastąpić dodawanie kolejnych członków. 

<small> Gdy wybierzesz opcję "**Edytuj zakładkę**" (pr.kl.myszy) to możesz sobie zmienić **kilka parametrów**: </small>
````js
const dely=1000;      // delay after user added
        //(ms)        //pl: opóźnienie po dodaniu użytkownika 
const liSep=/[,;\s]+/;// separator of a list separated by commas or semicolons 
        //(regexp)    // or any whitespace characters = \s, including newline
                      //pl: separator listy rozdzielonej przecinkami lub średnikami 
                      // lub dowolnymi białymi znakami = \s, w tym nowego wiersza 
const uTst=/.@.../;   // validation pattern - i.e. @ and a few arbitrary characters around it
        //(regexp)    //pl: wzorzec do walidacji - czyli @ i kilka dowolnych znaków dookoła 
````
</details>

#### **4.** <s>Lista członków grup **MS Teams**</s> (b1)

<details markdown=1><summary markdown="span" style="color:red">

2024-11-15: <b> Uwaga to już nie działa ! </b> <br>         ... 

</summary>


<small> (2023-10-03. Przywrócono działanie poniższych skryptozakładek po zmianach w MS Teams. Na starszych wersjach: prawy klawisz myszy, "Usuń zakładkę" i ponownie zaciągamy nowsze skryptozakładki.) </small>

Jest to jeden ze sposobów pobrania listy członków grup z nazwami i loginami Office365. Opiera się na wyłuskiwaniu danych ze strony HTML, czyli zakłada uruchomienie Teams w przeglądarce:  
![TeamsApp.png]({{site.baseurl}}/assets/img/TeamsApp.png "TeamsApp.png"){: style="width:25px;"} <https://teams.microsoft.com/>.  
<small>(Równocześnie można mieć uruchomioną aplikację klasyczną Teams - obie wersje mogą działać równolegle).</small>  

Trzeba w oknie głównym widzieć listę "Właściciele" i "Członkowie i goście" (można rozwinąć obie listy):

![ZarzadzanieZespolem.png]({{site.baseurl}}/assets/img/ZarzadzanieZespolem.png "ZarzadzanieZespolem.png"){: style="float:right;width:50%;"}

Menu zespołu: ![3kropki.png]({{site.baseurl}}/assets/img/3kropki.png "3kropki.png"){: style="width:25px;"} \ "Zarządzanie zespołem" 

albo 

![i_.png]({{site.baseurl}}/assets/img/i_.png "i_.png"){: style="width:20px;"} w prawym górnym rogu \ "Wyświetl wszystkich członków" (łącze na samym dole listy)  
![i_PokazInfOKanale.png]({{site.baseurl}}/assets/img/i_PokazInfOKanale.png "i_PokazInfOKanale.png"){: style="width:39%;"}


**I sposób - skryptozakładka** (zalecane)

Po kliknięciu skryptozakładki 
[\[TeamsLst\]](javascript:(function(){var x=document.querySelector("div[class^='td-members-']");var t=x.innerHTML;var re=/<div class="td\-member\-name.*?aria\-label="(.*?)[\,"].*?upn="(.*?)"/g;var y=[...t.matchAll(re)].map(function(a){return"<tr><td>"+a[2]+"</td><td>"+a[1]+"</td></tr>\n";});document.body.innerHTML='<table border="1" style="display:block;overflow:auto;height:'+window.innerHeight+'px;width:100%;"><tr><th>o365</th><th>name</th></tr>\n'+y.join("")+"</table>";})();){: .favlet} 
<small>([TeamsLst.js]({{site.url}}{{site.baseurl}}/download/TeamsLst.js.html))</small>
strona z listą osób w MS Teams powinna się zmienić w tabelę, którą można kopiować do Notatnika, Worda czy Excela.  
<small>Jeśli nic się nie dzieje po kliknięcu, a w konsoli (zob. niżej) widzimy błąd `x is null`{: style="font-size:smaller;"}, albo `Cannot read property of null`{: style="font-size:smaller;"}, to znaczy, że to nie jest właściwa strona Teams na której jest lista osób.</small>

Aby powrócić do pierwotnego wyglądu, trzeba odświeżyć stronę np. naciskając [F5].

Skryptozakładki 
[\[TeamsLi\]](javascript:(function(){var x=document.querySelector("div[class^='td-members-']");var t=x.innerHTML;var re=/<div class="td\-member\-name.*?" upn="(.*?)"[\s\S]+?\<div class="td-member-display-name"><span .*?>(.*?)<\/span>.+?"::teamMember.jobTitle" aria-label=(?:"undefined|")(.*?)[\,"](?:.*?::teamMember.userLocation" aria-label=(?:"undefined|")(.*?)[\,"])?.+?\-member\-role.+?<span .+?>(.*)<\/span>(?:<\/div>)?<!----><!---->/g;var y=[...t.matchAll(re)].map(function(a){return"<tr><td>"+a.slice(1,).join("</td><td>")+"</td></tr>\n";});document.body.innerHTML='<table border="1" style="display:block;overflow:auto;height:'+window.innerHeight+'px;width:100%;"><tr><th>'+['o365','name','title','loc','role'].join("</th><th>")+("</th></tr>\n")+y.join("")+'</table>';})();){: .favlet} 
<small>([TeamsLi.js]({{site.url}}{{site.baseurl}}/download/TeamsLi.js.html))</small>
i
[\[TeamsLImg\]](javascript:(function(){var x=document.querySelector("div[class^='td-members-']");var t=x.innerHTML;var re=/<div class="td\-member\-name.*?(<img .+?" upn="(.*?)".+?>)[\s\S]+?\<div class="td-member-display-name"><span .*?>(.*?)<\/span>.+?"::teamMember.jobTitle" aria-label=(?:"undefined|")(.*?)[\,"](?:.*?::teamMember.userLocation" aria-label=(?:"undefined|")(.*?)[\,"])?.+?\-member\-role.+?<span .+?>(.*)<\/span>(?:<\/div>)?<!----><!---->/g;var y=[...t.matchAll(re)].map(function(a){return"<tr><td>"+a.slice(1,).join("</td><td>")+"</td></tr>\n";});document.body.innerHTML='<table border="1" style="display:block;overflow:auto;height:'+window.innerHeight+'px;width:100%;"><tr><th>'+['img','o365','name','title','loc','role'].join("</th><th>")+'</th></tr></thead>\n'+y.join("")+'</table>';})();){: .favlet} 
<small>([TeamsLImg.js]({{site.url}}{{site.baseurl}}/download/TeamsLImg.js.html))</small>
działają podobnie, a dają więcej kolumn tabeli. <small>Aby skopiować tabelę wraz z awatarami do Worda/Excela trzeba najpierw zapisać całą stronę jako HTML na lokalnym dysku, otworzyć (Firefox działa w tym przypadku najlepiej) i wtedy kopiować.</small>


- <small> _Można też pobrać listę za pomocą skryptu - zob. [MicrosoftTeams PowerShell w praktyce](https://andrzejq.github.io/El_Prog/programowanie/2020/11/24/PowerShell-bibl-MicrosoftTeams.html). Nawet można automatycznie załadować listę członków z pomocą skryptu PowerShell._ </small>
- <small> _Poniżej jest opisany sposób dodawania listy członków z pomocą dodatku do przeglądarki._ </small>


<details>
<summary> <small><b> II sposób - konsola, bez skryptozakładki</b> (dla dociekliwych) </small> </summary>

Naciskamy [F12] i wybieramy kartę "Konsola".
(<small>Konsola pozwala wykrywać błędy skryptów, a także skryptozakładek.</small>).

Wklejamy poniższy kod i uruchamiamy ([Enter], czasem [Ctrl+Enter], albo ikonka ">" (run/wykonaj)) :


<div><pre><code style="font-size:smaller;">var x = document.querySelector(&quot;div[class^=&apos;td-members-&apos;]&quot;) ;
var t = x.innerHTML;
var re =/&lt;div class=&quot;td\-member\-name.*?aria\-label=&quot;(.*?)[\,&quot;].*?upn=&quot;(.*?)&quot;/g;
var y = [...t.matchAll(re)].map(function(a) {return a[2]+&quot;\t&quot;+a[1];});
document.body.innerHTML = &apos;&lt;pre&gt;&apos;+y.join(&quot;\n&quot;)+&apos;&lt;/pre&gt;&apos;;
</code></pre></div>

<p><small>
Uwaga - czasem podczas tej operacji pojawia się jednorazowe wezwanie do wpisania czegoś w celu odblokowania konsoli - po prostu przepisujemy ten tekst w konsoli.
</small></p>

Listę, która powinna pojawić sie na stronie www kopiujemy do Notatnika (potem z Notatnika do Excela). Odświeżamy stronę: [F5].
</details>  


...  

- - - -
.  


**Teams - odświeżanie danych:**

* Wyloguj się i zaloguj ponownie
* albo: zmień na chwilę organizację (jeśli masz kilka)
* albo w ostateczności: wyczyść dane podręczne (cache) aplikacji klasycznej MS Teams:
	- Zamknij aplikację Teams (także w zasobniku obok zegara)
	- Usuń wszystko z `%AppData%\Microsoft\Teams`
	
</details>

#### 5. Konwersja strony HTML na Markdown (b1, i1)

Z pomocą konwertera HTML -> Markdown "**turndown**" (<https://github.com/domchristie/turndown>) autorstwa Dom Christie 
można konwertować całe strony HTML na dokument Markdown.  
[\[TD-\]](javascript:Promise.all([import('https://unpkg.com/turndown?module'),import('https://unpkg.com/@tehshrike/readability@0.2.0'),]).then(async([{default:TDs},{default:Rdby}])=>{const{title,byline,content}=new Rdby(document.cloneNode(true)).parse();const tdPlg=await import('https://unpkg.com/turndown-plugin-gfm?module');const tdSrv=new TDs({headingStyle:'atx',hr:'- - -',bulletListMarker:'*',codeBlockStyle:'fenced',emDelimiter:'_',});tdSrv.use(tdPlg.gfm);const markdown=tdSrv.turndown(content);const roamText=`* [${title}](${document.URL})\n\n${markdown}`;document.body.innerHTML='<pre></pre>';document.body.children[0].innerText=roamText;})){: .favlet} 
to skryptozakładka z przykładu na
[reddit.com](https://www.reddit.com/r/RoamResearch/comments/hsitd3/bookmarklet_copy_all_the_page_content_to_the/#CommentTopMeta--Created--t1_fz0j2r4)
z włączonymi dodatkami (table, listy zadań, ...)
<small>([TurnDownAll.js]({{site.url}}{{site.baseurl}}/download/TurnDownAll.js.html))</small>. Po kliknięciu skryptozakładki strona zmienia się w swój tekst Markdown (cierpliwie poczekaj...). Można sobie skopiować dowolny fragment. Na koniec [F5].  
Nie zawsze to działa idealnie...

* Zob. też [MarkDown - zastosowania »](https://andrzejq.github.io/El_Prog/programowanie/2024/03/11/MarkDown-zastosowania.html)

#### 6. JOOMLA galeria SIGPLUS (b1)

<details markdown=1><summary markdown="span">   Skryptozakładka dla edytora HTML w JOOMLA z dodatkiem SIGPLUS ...  </summary>

 [\[sig+\]](javascript:void%20function(){var%20e=document.querySelector(%22textarea%23jform_articletext%22);if(!e)return%20void%20alert(%221.%20Coś%20jest%20nie%20tak%20\n%20-%20musisz%20być%20w%20trybie%20edycji%20html%22);document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click();var%20t=e.value,r=t.replace(/%3Cimg%20src=%22images\/(.*%3F)\/[^/]+\/%3E/,'{gallery%20maxcount=1%20alignment=%22after-float%22%20preview_width=120%20preview_height=160}$1{/gallery}');return%20r===t%3Fvoid%20alert(%222.%20Coś%20jest%20nie%20tak%20\n%20-%20może%20nie%20ma%20wstawionego%20obrazka...\n%20-%20a%20może%20edytor%20nie%20jest%20trybie%20HTML%22):(e.value=r,void%20document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click())}();){: .favlet} zamienia pierwsze napotkane łącze obrazka `<img src="images...` na łącze galerii obrazów `{gallery.../gallery}` umieszczonych w tym samym folderze co `<img`.  
Należy więc do swojego dokumentu Joomla wstawić jakikolwiek obrazek z foldera, który zawiera obrazy do galerii i kliknąć `[sig+]`.  
<small>(Zob. też [plik źródłowy img2sigplus.js]({{site.url}}{{site.baseurl}}/download/img2sigplus.js.html) )</small>

</details>

.

#### 7. Rozwiń wszystkie szczegóły (b1)

Skryptozakładka [\[summ+\]](javascript:void%20function(){document.querySelectorAll('details').forEach((detail)=>{detail.open = true;});}();){: .favlet} 
rozwija wszystkie napotkane na stronie panele `<details> - <summary>`: 
<details>
<summary> Test ... </summary>
Szczegóły...
</details>

.

#### n. Skryptozakładki - notatki

A. [Tworzenie skryptozakładki](https://www.freecodecamp.org/news/what-are-bookmarklets/): 
1. Plik "*.js" musi przestrzegać ściśle składni `{..}` i `;`. Stosuj krótkie nazwy zmiennych i funkcji. Nie oszczędzaj na komentarzach. Stosuj wcięcia.
2. Otocz kod anonimową funkcją: `javascript: (() => {` ... `})();` (automatycznie uruchamianą).
3. Testowanie: przeglądarka \ [F12] \ Konsola. Wklej kod JavaScript. Uruchom.
4. Minimalizacja do 1 wiersza, np. Notatniku++/JSTool. Trzeba dopisać średniki na końcu wierszy, gdy wynik jest wielowierszowy.
5. Wklej jako treść nowej zakładki.


B. Drobne problemy z umieszczaniem skryptozakładek na stronach HTML.

1. Skryptozakładkę można zamieścić na stronie HTML jako odnośnik:  
   `<a href="javascript:(()=>{` ...  `})();">nazwa</a>`
2. Na stronach generowanych z pomocą MarkDown również można zamieszczać ją w składni:  
   `[nazwa](javascript:(()=>{` ...  `})();)`  
   Może się zdarzyć, że niektóre fragmenty kodu mogą zaburzyć interpretację MarkDown. Wtedy można skorzystać z konwersji URL encode. (Błąd objawia się "wyciekaniem" kodu js na tekst strony).
3. Można też po prostu unikać niektórych sformułowań języka. Kilka przykładów do omijania w przypadku MarkDown na stronach Jekyll (nie jest to dokładnie przetestowane): 
	* jest problem z `'tekst '`, czyli gdy jest spacja przed zamykającycm apostrofem; pomaga np. `'tekst -'`.
	* chyba nie można wstawić: `' " " '` ale działa `' [ " " ]'`

Odnośniki:
* <https://www.freecodecamp.org/news/what-are-bookmarklets/>


<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px} pre.highlight code{font-size:smaller;}</style>

<!-- {% unless jekyll.environment %} -->
<script>

(function() {
  const images = document.getElementsByTagName('img');
  for(let i = 0; i < images.length; i++) {
    images[i].src = images[i].src.replace('%7B%7Bsite.baseurl%7D%7D','..');
  } //{{site.baseurl}} - without spaces!  
})();

</script>
<!-- {% endunless %} -->
