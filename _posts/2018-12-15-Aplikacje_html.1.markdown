---
layout: post
title:  "Aplikacje html.1"
date:   2019-01-21 10:21:59 +0100
categories: jekyll update
---

Zebrałem tu kilka aplikacji, które mają postać pojedynczego pliku HTML. 

1. **QR Code** [® <sup>Denso Wave Incorporated</sup>](http://www.denso-wave.com/qrcode/faqpatent-e.html)
	1. **Generator** (o1)
		- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/QRcode1.zip)
		- [wypróbuj QRcode1.html (+instrukcja)]({{ site.url }}{{ site.baseurl }}/download/QRcode1.html)
	2. **Czytnik** z użyciem kamery koputera/laptopa (o1)
		- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1cam.zip)
		- [wypróbuj jsQR_Demo1cam.html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1cam.html)
	3. **Czytnik** odczytujący QR-kod z pliku graficznego, np. skanu. (o1)
		- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1img.zip)
		- [wypróbuj jsQR_Demo1img.html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1img.html) <small>- Uwaga - ta aplikacja działa jako lokalny plik HTML (off-line) i plik z obrazem QR-kodu musi być w tym samym folderze co plik HTML. Aby testowo ją uruchomić bez ściągania na lokalny komputer należy stworzyć na swoim komputerze plik "test.png" o dowolnej zawartości (będzie zignorowana) i przeciągnąć go na przycisk "Przeglądaj...". Zostanie odczytany plik o tej samej nazwie znajdujący się na serwerze.</small>

2. **markdown+mathjax** (i1)
- edytor Markdown (marked.js) + wzory matematyczne MathJax
- podgląd wynikowy HTML + eksport do pliku HTML (i możliwość wydruku do PDF)
- Plik <https://github.com/andrzejQ/markdown-mathjax>
- Demo <https://andrzejQ.github.io/markdown-mathjax/editor/md-mhj.html>

3. **Zaawansowane zmiany w tekście - wyrażenia regularne** (o1)
- Formularz zmiany tekstu na podstawie wielokrotnych [wyrażeń regularnych](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/RegExp).
- Formularz działa też w trybie off-line. Tylko z wykorzystaniem silnika przeglądarki. Nic nie jest wysyłane do Internetu. Wszystko jest w pojedynczym pliku HTML.
- Wypróbuj czy to działa - tj. czy tekst jest przetwarzany wg. podanych wyrażeń regularnych. Wstaw dane i swoją konfigurację. Można to potem zapisać jako nowy plik HTML w Firefox. Można też podstawić swoją nową konfigurację w `<textarea id="regExpPat" ...` w kopii pliku "MultiRegExpRepl.html". <small>Przed zapisaniem nowej wersji warto usunąć tekst pierwotny.</small>
		- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/MultiRegExpRepl.zip)
		- [wypróbuj MultiRegExpRepl.html]({{ site.url }}{{ site.baseurl }}/download/MultiRegExpRepl.html)


4. **Edytor wizualny WYSIWYG html w przeglądarce** (o1)
- demo  (słabo dopracowane) na bazie przykładu [developer.mozilla.org...Editable_content](https://developer.mozilla.org/pl/docs/Web/Guide/HTML/Editable_content#Example_A_simple_but_complete_rich_text_editor)
- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.zip)
- [wypróbuj EditInHtml1.html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.html)
- demo pokazuje możliwość edycji stron www wyświetlanych w przeglądarce, którą też daje np. 
[skryptozakładka](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka)
[\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet}.

<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px}</style>

