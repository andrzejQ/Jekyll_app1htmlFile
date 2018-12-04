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
- demo pokazuje możliwość edycji stron www wyświetlanych w przeglądarce, którą też daje np. [skryptozakładka](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka) [**\[Edit Website\]**](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: style="background-color:Lavender"}, można też zmieniać kontrast tekstu [**\[B/W\]**](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: style="background-color:Lavender"}
zob.więcej na [100+ Useful Bookmarklets](https://www.hongkiat.com/blog/100-useful-bookmarklets-for-better-productivity-ultimate-list/), [
7is7.com_Bookmarklets](http://7is7.com/software/bookmarklets/)

