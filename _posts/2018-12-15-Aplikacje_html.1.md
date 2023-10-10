---
layout: post
title:  "Aplikacje html.1"
date:   2020-09-09 10:21:59 +0100
categories: jekyll onefileapp
---

Aplikacje w postaci pliku HTML<br>
 [1.&nbsp;QR Code - generator i czytnik off-line (o1)]({{site.url}}{{site.baseurl}}{{page.url}}#qr-code---generator-i-czytnik-off-line) <br>
 [2.&nbsp;Edytor Markdown (marked.js) + MathJax (i1)]({{site.url}}{{site.baseurl}}{{page.url}}#edytor-markdown-markedjs--mathjax-i1) <br>
 [3.&nbsp;Zaawansowane zmiany w tekście - wyrażenia regularne (o1)]({{site.url}}{{site.baseurl}}{{page.url}}#zaawansowane-zmiany-w-tekście---wyrażenia-regularne-o1) <br>
 [4.&nbsp;Edytor wizualny WYSIWYG html w przeglądarce (o1)]({{site.url}}{{site.baseurl}}{{page.url}}#edytor-wizualny-wysiwyg-html-w-przeglądarce-o1)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
{% capture symb1 %}
{% if jekyll.environment=="production" %}{{site.baseurl}}{% endif %}{% post_url 2018-12-17-Kategorie_aplikacji %}
{% endcapture %}

### QR Code - generator i czytnik off-line

QR Code [<sup>® Denso Wave Incorporated</sup>](http://www.denso-wave.com/qrcode/faqpatent-e.html) - kody QR działające off-line z wykorzystaniem silnika przeglądarki. <br>
<small>Można je używać do przenoszenia tekstów pomiędzy telefonem, a laptopem nawet gdy nie ma zasięgu sieci. Aplikacje JavaScript są w pojedynczych plikach HTML, które można zapamiętać na dysku lokalnym lub urządzeniu mobilnym i uruchamiać w przeglądarce bez potrzeby instalacji dodatkowych aplikacji.
</small>

1. **Generator** [**(o1)**]({{symb1}})
	- [spakowany plik html - QRcode01.zip]({{site.url}}{{site.baseurl}}/download/QRcode01.zip "QRcode01.zip")
	- [wypróbuj QRcode01.html (+instrukcja)]({{site.url}}{{site.baseurl}}/download/QRcode01.html)  
<small>
m.in. wyjście jako tekst - znaki blokowe i jako tabela html - puste komórki z białym lub czarnym tłem.<br>
Pokazywany jest podział zakodowanych w różnych trybach fragmentów, co pozwala na optymalizację rozmiaru QR-kodu.
</small>
2. **Czytnik** z użyciem kamery koputera/laptopa [**(o1)**]({{symb1}})
	- [spakowany plik html - jsQR_Demo1cam.zip]({{site.url}}{{site.baseurl}}/download/jsQR_Demo1cam.zip "jsQR_Demo1cam.zip")
	- [wypróbuj jsQR_Demo1cam.html]({{site.url}}{{site.baseurl}}/download/jsQR_Demo1cam.html)  
<small>
Po odczytaniu QR-kodu w tych czytnikach pokazywany jest tryb wszystkich zakodowanych fragmentów.
</small>
3. **Czytnik** odczytujący QR-kod z pliku graficznego, np. skanu. [**(o1)**]({{symb1}})
- [spakowany plik html - jsQR_Demo1img.zip]({{site.url}}{{site.baseurl}}/download/jsQR_Demo1img.zip "jsQR_Demo1img.zip")
- [wypróbuj jsQR_Demo1img.html]({{site.url}}{{site.baseurl}}/download/jsQR_Demo1img.html)  
<small>
Ogólnie czytnik działa błyskawicznie. Tak jest zawsze, gdy przekazujemy plik metodą "przeciągnij i upuść". Ale gdy wybieramy plik klikając [ Przeglądaj... ], to po otwarciu Eksploratora Windows zdarza się, że aplikacja zamraża się na ponad 5 sek. Przyczyną tego mogą być przypięte w "![SzybkiDostepIco.png]({{site.baseurl}}/assets/img/SzybkiDostepIco.png "SzybkiDostepIco.png") Szybki dostęp" skróty do 
[folderów sieciowych, które są w danej chwili niedostępne](https://stackoverflow.com/questions/39990111/browser-freezing-after-selecting-file-in-input-field/66668358#answer-66668358). Po  odpięciu tych skrótów problem powinien zniknąć. Czasem 
[odpięcie się nie udaje](https://www.winhelponline.com/blog/fix-quick-access-reset-pinned-shortcuts-stuck-not-working-windows-10/). Wtedy można w Eksploratorze \ Widok \ Opcje \ "Zmień opcje folderów i wyszukiwania" na chwilę odznaczyć "[_] Pokaż często używane foldery na pasku szybki dostęp" i udaje się odpiąć kłopotliwy skrót.
</small>

<br>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Edytor Markdown (marked.js) + MathJax

[**(i1)**]({{symb1}})   Edytor Markdown (marked.js) + wzory matematyczne MathJax.

- podgląd wynikowy HTML + eksport do pliku HTML (i możliwość wydruku do PDF)
- Plik <https://github.com/andrzejQ/markdown-mathjax>
- Demo <https://andrzejQ.github.io/markdown-mathjax/editor/md-mhj.html>

<br>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Konwersja HTML -> Markdown

[**(i1)**]({{symb1}})   
Na stronie projektu konwertera HTML -> Markdown "**turndown**" (<https://github.com/domchristie/turndown>) Dom Christie zamieścił przykład użycia swojej biblioteki.
Tutaj to demo z włączonymi dodatkami (table, listy zadań, ...):

- [spakowany plik html - turndown_html2md.zip]({{site.url}}{{site.baseurl}}/download/turndown_html2md.zip "turndown_html2md.zip")
- [wypróbuj turndown_html2md.html]({{site.url}}{{site.baseurl}}/download/turndown_html2md.html)

<br>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Zaawansowane zmiany w tekście - wyrażenia regularne

- [**(o1)**]({{symb1}})   Formularz zmiany tekstu na podstawie wielokrotnych [wyrażeń regularnych](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/RegExp) zapamiętywanych w oknie konfiguracji.
- Formularz działa w trybie off-line - tylko z wykorzystaniem silnika przeglądarki. Nic nie jest wysyłane do Internetu. Wszystko jest w pojedynczym pliku HTML.
	- [spakowany plik html - MultiRegExpRepl.zip]({{site.url}}{{site.baseurl}}/download/MultiRegExpRepl.zip "MultiRegExpRepl.zip")
	- [wypróbuj MultiRegExpRepl.html]({{site.url}}{{site.baseurl}}/download/MultiRegExpRepl.html)

<br>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Edytor wizualny WYSIWYG html w przeglądarce 



- [(o1)]({{symb1}})   demo  (słabo dopracowane) na bazie przykładu [developer.mozilla.org...Editable_content](https://developer.mozilla.org/pl/docs/Web/Guide/HTML/Editable_content#Example_A_simple_but_complete_rich_text_editor)
	- [spakowany plik html - EditInHtml1.zip]({{site.url}}{{site.baseurl}}/download/EditInHtml1.zip "EditInHtml1.zip")
	- [wypróbuj EditInHtml1.html]({{site.url}}{{site.baseurl}}/download/EditInHtml1.html)
- demo pokazuje możliwość edycji stron www wyświetlanych w przeglądarce, którą też daje np. 
[skryptozakładka]( {% if jekyll.environment=="production" %}{{site.baseurl}}{% endif %}{% post_url 2018-12-16-Skryptozakladki %}) 
[\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet}.

<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px}</style>

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