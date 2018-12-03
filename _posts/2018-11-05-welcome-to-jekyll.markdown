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

3. Edytor wizualny WYSIWYG html w przeglądarce
- demo  (słabo dopracowane) na bazie przykładu [developer.mozilla.org...Editable_content](https://developer.mozilla.org/pl/docs/Web/Guide/HTML/Editable_content#Example_A_simple_but_complete_rich_text_editor)
- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.zip)
- [wypróbuj EditInHtml1.html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.html)
