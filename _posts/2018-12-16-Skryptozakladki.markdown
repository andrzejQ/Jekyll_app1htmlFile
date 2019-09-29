---
layout: post
title:  "Skryptozakładki"
date:   2018-12-16 10:21:59 +0100
categories: jekyll update
---
[Skryptozakładki](https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka) to małe 1-wierszowe aplikacje Javascript, które można umieszczać w pasku zakładek swojej przeglądarki internetowej.

Tutaj kilka przykładów stworzonych na doraźne potrzeby.

1. **sig+** (b1)
- skryptozakładka dla edytora HTML w JOOMLA z dodatkiem SIGPLUS [\[sig+\]](javascript:void%20function(){var%20e=document.querySelector(%22textarea%23jform_articletext%22);if(!e)return%20void%20alert(%221.%20Coś%20jest%20nie%20tak%20\n%20-%20musisz%20być%20w%20trybie%20edycji%20html%22);document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click();var%20t=e.value,r=t.replace(/%3Cimg%20src=%22images\/(.*%3F)\/[^/]+\/%3E/,'{gallery%20maxcount=1%20alignment=%22after-float%22%20preview_width=120%20preview_height=160}$1{/gallery}');return%20r===t%3Fvoid%20alert(%222.%20Coś%20jest%20nie%20tak%20\n%20-%20może%20nie%20ma%20wstawionego%20obrazka...\n%20-%20a%20może%20edytor%20nie%20jest%20trybie%20HTML%22):(e.value=r,void%20document.querySelector(%22span%23wf_editor_jform_articletext_toggle%22).parentNode.click())}();){: .favlet} zamienia pierwsze napotkane łącze obrazka `<img src="images...` na łącze galerii obrazów `{gallery.../gallery}` umieszczonych w tym samym folderze co `<img`. (Zob. też [plik źródłowy]({{ site.url }}{{ site.baseurl }}/download/img2sigplus.js.html) )

2. Kilka skryptozakładek, które można znaleźć m.in. na  [100+ Useful Bookmarklets](https://www.hongkiat.com/blog/100-useful-bookmarklets-for-better-productivity-ultimate-list/), [
7is7.com_Bookmarklets](http://7is7.com/software/bookmarklets/), [bookmarklets.org](http://bookmarklets.org/):
- możliwość edycji stron www wyświetlanych w przeglądarce (dopisywanie / usuwanie tekstu / usuwanie obrazków) [\[Edit Website\]](javascript:document.body.contentEditable='true';document.designMode='on';void(0);){: .favlet},
- zmiana kontrastu tekstu na czarno na białym: [\[B/W\]](javascript:(function(){var newSS,styles='*{background:white!important;color:black!important}:link,:link*{color:#0000EE!important}:visited,:visited*{color:#551A8B!important}';newSS=document.createElement('link');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')[0].appendChild(newSS);})();){: .favlet}.

<style>.favlet{background-color:Lavender;font-weight:bold;padding:0 3px}</style>

