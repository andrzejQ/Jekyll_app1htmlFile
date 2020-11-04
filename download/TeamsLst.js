//Extract list in MS Teams
(function() {
var x = document.getElementsByClassName("td-members-tab team-dashboard-tab flex-fill");
var t = x[0].innerHTML;
var re =/\<div class="td\-member\-name".*?aria\-label="(.*?)[\,"].*?upn="(.*?)"/g;
var y = [...t.matchAll(re)].map(function(a) {return "<tr><td>"+a.slice(1,).join("</td><td>")+"</td></tr>\n";});
document.body.innerHTML = '<table border="1"><tr><th>Name</th><th>o365</th></tr>\n'+ y.join("") +"</table>";
})();