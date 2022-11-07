---
layout: post
title:  "Aplikacje html.1"
date:   2020-09-09 10:21:59 +0100
categories: jekyll onefileapp
---
Aplikacje w postaci pliku HTML - [QR Code - generator i czytnik off-line (o1)]({{ site.url }}{{ site.baseurl }}{{ page.url }}#qr-code---generator-i-czytnik-off-line); [Edytor Markdown (marked.js) + MathJax (i1)]({{ site.url }}{{ site.baseurl }}{{ page.url }}#edytor-markdown-markedjs--mathjax-i1); [Zaawansowane zmiany w tekście - wyrażenia regularne (o1)]({{ site.url }}{{ site.baseurl }}{{ page.url }}#zaawansowane-zmiany-w-tekście---wyrażenia-regularne-o1); [Edytor wizualny WYSIWYG html w przeglądarce (o1)]({{ site.url }}{{ site.baseurl }}{{ page.url }}#edytor-wizualny-wysiwyg-html-w-przeglądarce-o1)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### QR Code - generator i czytnik off-line

QR Code [<sup>® Denso Wave Incorporated</sup>](http://www.denso-wave.com/qrcode/faqpatent-e.html) działajacy off-line z wykorzystaniem silnika przegląarki.

1. **Generator** (o1)
	- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/QRcode1.zip)
	- [wypróbuj QRcode1.html (+instrukcja)]({{ site.url }}{{ site.baseurl }}/download/QRcode1.html)
2. **Czytnik** z użyciem kamery koputera/laptopa (o1)
	- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1cam.zip)
	- [wypróbuj jsQR_Demo1cam.html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1cam.html)
3. **Czytnik** odczytujący QR-kod z pliku graficznego, np. skanu. (o1)
- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1img.zip)
- [wypróbuj jsQR_Demo1img.html]({{ site.url }}{{ site.baseurl }}/download/jsQR_Demo1img.html); 
<small> 
Ogólnie czytnik działa błyskawicznie. Tak jest zawsze, gdy przekazujemy plik metodą "przeciągnij i upuść". Ale gdy klikamy [ Przeglądaj ] i otworzy się nam okno wyszukiwania plików, to po wybraniu pliku z obrazem QR-kodu zdarza się, że aplikacja może jakby zawisnąć na ponad 5 sek. Przyczyną tego mogą być przypięte w "Szybki dostęp" (niebieska gwiazdka) skróty do folderów sieciowych, które są w danej chwili niedostępne. Po  odpięciu tych skrótów problem powinien zniknąć. Czasem odpięcie się nie udaje. Wtedy można w Eksploratorze \ Widok \ Opcje \ Zmień opcje folderów i wyszukiwania na chwilę trzeba odznaczyć [_] Pokaż często używane foldery na pasku szybki dostęp. Wtedy udaje się odpiąć kłopotliwy skrót.
</small>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Edytor Markdown (marked.js) + MathJax (i1)

Edytor Markdown (marked.js) + wzory matematyczne MathJax.

- podgląd wynikowy HTML + eksport do pliku HTML (i możliwość wydruku do PDF)
- Plik <https://github.com/andrzejQ/markdown-mathjax>
- Demo <https://andrzejQ.github.io/markdown-mathjax/editor/md-mhj.html>

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Konwersja HTML -> Markdown (i1)

Na stronie projektu konwertera HTML -> Markdown "**turndown**" (<https://github.com/domchristie/turndown>) Dom Christie zamieścił przykład użycia swojej biblioteki.
Tutaj to demo z włączonymi dodatkami (table, listy zadań, ...):

- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/turndown_html2md.zip)
- [wypróbuj turndown_html2md.html]({{ site.url }}{{ site.baseurl }}/download/turndown_html2md.html)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Zaawansowane zmiany w tekście - wyrażenia regularne (o1)

- Formularz zmiany tekstu na podstawie wielokrotnych [wyrażeń regularnych](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/RegExp) zapamiętywanych w oknie konfiguracji.
- Formularz działa w trybie off-line - tylko z wykorzystaniem silnika przeglądarki. Nic nie jest wysyłane do Internetu. Wszystko jest w pojedynczym pliku HTML.
	- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/MultiRegExpRepl.zip)
	- [wypróbuj MultiRegExpRepl.html]({{ site.url }}{{ site.baseurl }}/download/MultiRegExpRepl.html)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Edytor wizualny WYSIWYG html w przeglądarce (o1)

- demo  (słabo dopracowane) na bazie przykładu [developer.mozilla.org...Editable_content](https://developer.mozilla.org/pl/docs/Web/Guide/HTML/Editable_content#Example_A_simple_but_complete_rich_text_editor)
	- [spakowany plik html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.zip)
	- [wypróbuj EditInHtml1.html]({{ site.url }}{{ site.baseurl }}/download/EditInHtml1.html)
- demo pokazuje możliwość edycji stron www wyświetlanych w przeglądarce, którą też daje np. 
[skryptozakładka]( {% if jekyll.environment=="production" %}{{ site.baseurl }}{% endif %}{% post_url 2018-12-16-Skryptozakladki %}) 
[\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet}.

<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px}</style>

