---
layout: post
title:  "Aplikacje"
date:   2018-11-05 10:21:59 +0100
categories: jekyll update
---

Zebrałem tu kilka aplikacji, które mają postać pojedynczego pliku HTML. 

Oznaczam je symbolami:
- (o1) - pojedynczy plik HTML działający lokalnie bez potrzeby dostępu do internetu (off-line). Można go przesyłać m.in. w postaci spakowanej i odbiorca może go "uruchomić" wprost ze zapakowanej paczki.
- (i1) - pojedynczy plik wykorzystujący jakieś otwarte zasoby internetowe (głównie biblioteki JS oraz grafikę)
- (x1) - "prawie" 1 plik - wymagający w swoim bliskim otoczeniu nieznacznej liczby dodatkowych, stałych plików (stosunkowo łatwy do uruchomienia zaraz po rozpakowaniu); logiczna treść jest w 1 pliku głównym.

1. **Generator [QR Code](http://www.denso-wave.com/qrcode/faqpatent-e.html)** (o1) 
- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/QRcode1.zip)
- [wypróbuj QRcode1.html (+instrukcja)]({{ site.url }}{{ site.baseurl }}/download/QRcode1.html)

2. **markdown+mathjax** (i1)
- edytor Markdown (marked.js) + wzory matematyczne MathJax
- podgląd wynikowy HTML + eksport do pliku HTML
- Plik <https://github.com/andrzejQ/markdown-mathjax>
- Demo <https://andrzejQ.github.io/markdown-mathjax/editor/md-mhj.html>

3. Edytor wizualny WYSIWYG html w przeglądarce (o1)
- demo  (słabo dopracowane) na bazie przykładu [developer.mozilla.org...Editable_content](https://developer.mozilla.org/pl/docs/Web/Guide/HTML/Editable_content#Example_A_simple_but_complete_rich_text_editor)
- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.zip)
- [wypróbuj EditInHtml1.html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.html)
- demo pokazuje możliwość edycji stron www wyświetlanych w przeglądarce, którą też daje np. 
[skryptozakładka](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka)
[\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet},
można też zmieniać kontrast tekstu
[\[B/W\]](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: .favlet}.
Więcej na [100+ Useful Bookmarklets](https://www.hongkiat.com/blog/100-useful-bookmarklets-for-better-productivity-ultimate-list/), [
7is7.com_Bookmarklets](http://7is7.com/software/bookmarklets/)

4. Skryptozakładka (tymczasowo tutaj) [\[sig+\]](javascript:void%20function(){var%20e=document.querySelector(%22textarea%23jform_articletext%22);if(e){document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click(),console.log(e);var%20t=e.value,r=t.replace(/%3Cimg%20src=%22images\/(.*%3F)\/[^\/]+\/%3E/,'{gallery%20maxcount=1%20alignment=%22after-float%22%20preview_width=120%20preview_height=160}$1{/gallery}');if(r===t)return%20void%20alert(%22Coś%20jest%20nie%20tak%20\n%20-%20może%20nie%20ma%20wstawionego%20obrazka...\n%20-%20a%20może%20edytor%20nie%20jest%20w%20prostym%20trybie%20HTML%22);e.value=r,document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click()}else%20alert(%22Coś%20jest%20nie%20tak%20\n%20-%20musisz%20być%20w%20trybie%20edycji%20z%20prostym%20edytorem%20html%22)}();){: .favlet}
zamienia pierwszy napotkany obrazek `<img...` na znacznik galerii obrazów w tym samym folderze jak dla `img`: `{gallery.../gallery}`.

<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px}</style>

