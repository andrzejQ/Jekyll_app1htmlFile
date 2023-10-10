---
layout: post
title:  "Kategorie aplikacji"
date:   2018-12-17 10:21:59 +0100
categories: jekyll onefileapp
---
Moje symbole kategorii 1-plikowych aplikacji: **(o1)** - 1 plik off-line; **(i1)** 1 plik i otwarte zasoby internetowe; **(x1)** - "prawie" 1 plik + kilka statycznych plików; **(b1)** skryptozakładka <br><small>(+ brudnopis)</small>


W tym blogu zebrałem tu kilka aplikacji, które mają postać pojedynczego pliku [HTML](https://pl.wikipedia.org/wiki/HTML)/[JS](https://pl.wikipedia.org/wiki/JavaScript) (lub 1 wiersza JS).

Oznaczam je symbolami:
- (o1) - pojedynczy plik HTML działający lokalnie bez potrzeby dostępu do internetu (off-line). Można go przesyłać m.in. w postaci spakowanej i odbiorca może go "uruchomić" wprost ze zapakowanej paczki.
- (i1) - pojedynczy plik wykorzystujący jakieś otwarte zasoby internetowe (głównie biblioteki JS oraz grafikę)
- (x1) - "prawie" 1 plik - wymagający w swoim bliskim otoczeniu nieznacznej liczby dodatkowych, stałych plików (stosunkowo łatwy do uruchomienia zaraz po rozpakowaniu); logiczna treść jest w 1 pliku głównym; pliki dodatkowe nie wymagają uaktualnienia po aktualizacji aplikacji
- (b1) - [skryptozakładka](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka) - 1-wierszowa mikro-aplikacja js 


----
<br>


<details markdown=1><summary markdown="span">Brudnopis . . . </summary>

----
<br>

SingleFileZ
-----------

SingleFileZ is a fork of SingleFile that allows you to save a webpage as a self-extracting HTML file. This HTML file is also a valid ZIP file which contains the resources (images, fonts, stylesheets and frames) of the saved page.

* <https://github.com/gildas-lormeau/SingleFileZ>

Docker
------

Docker Desktop WSL 2 backend on Windows  
* <https://docs.docker.com/desktop/wsl/>  
(not Hyper-V -> if VirtualBox or VMware)  

````cmd
F:\> wsl -l -v
  NAME                   STATE           VERSION
* Ubuntu-22.04           Running         2
  Ubuntu                 Stopped         2
  docker-desktop-data    Running         2
  docker-desktop         Running         2
````

SingleFileZ CLI (Command Line Interface)
----------------------------------------

* <https://github.com/gildas-lormeau/single-filez-cli>

`docker pull capsulecode/singlefilez`

`docker tag capsulecode/singlefilez singlefilez`

cmd (not PS !)  
`docker run singlefilez "https://www.wikipedia.org" > wikipedia.html`



<br>

----
<br>

### html notranslate test

Click links (html files) in a browser, such as Chrome, with the option to automatically translate into non-English.

`<title>Exported from Notepad++</title>`  
`<html>`  
[0.test_html_lang.js]({{site.url}}{{site.baseurl}}/download/0.test_html_lang.js.html)


`<title>1.test_html_lang.js</title>`  
`<html lang="en" class="notranslate" translate="no">`  
[1.test_html_lang.js]({{site.url}}{{site.baseurl}}/download/1.test_html_lang.js.html)


`<title>2.test_html_lang.js</title>`  
`<html lang="" class="notranslate" translate="no">`  
[2.test_html_lang.js]({{site.url}}{{site.baseurl}}/download/2.test_html_lang.js.html)

`<title>3.test_html_lang.js</title>`  
`<html lang="">`  
[3.test_html_lang.js]({{site.url}}{{site.baseurl}}/download/3.test_html_lang.js.html)

0... and 3... - auto-translate to Polish looks like:

![pl_transl_0_3_.png]({{site.baseurl}}/assets/img/pl_transl_0_3_.png "pl_transl_0_3_.png"){: style="width:452px;"}

1... and 2... :

![pl_transl_1_2_.png]({{site.baseurl}}/assets/img/pl_transl_1_2_.png "pl_transl_1_2_.png"){: style="width:452px;"}

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

</details>