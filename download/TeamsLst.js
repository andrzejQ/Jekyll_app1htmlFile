//Extract list in MS Teams
(function() {
var x = document.querySelector("div[class^='td-members-']");
var t = x.innerHTML;
var re =/<div class="td\-member\-name.*?aria\-label="(.*?)[\,"].*?upn="(.*?)"/g;
var y = [...t.matchAll(re)].map(function(a) {return "<tr><td>"+a[2]+"</td><td>"+a[1]+"</td></tr>\n";});
document.body.innerHTML = '<table border="1" style="display:block;overflow:auto;height:'+window.innerHeight+'px;width:100%;"><tr><th>o365</th><th>name</th></tr>\n'+ y.join("") +"</table>";
})();