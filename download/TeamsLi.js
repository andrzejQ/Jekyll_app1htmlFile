//Extract ['o365','name','title','location','role'] list in MS Teams
(function() {
var x = document.querySelector("div[class^='td-members-']");   //.getElementsByClassName("td-members-tab team-dashboard-tab flex-fill");
var t = x.innerHTML;
var re =/<div class="td\-member\-name.*?" upn="(.*?)"[\s\S]+?\<div class="td-member-display-name"><span .*?>(.*?)<\/span>.+?"::teamMember.jobTitle" aria-label=(?:"undefined|")(.*?)[\,"](?:.*?::teamMember.userLocation" aria-label=(?:"undefined|")(.*?)[\,"])?.+?\-member\-role.+?<span .+?>(.*)<\/span>(?:<\/div>)?<!----><!---->/g;
// 1. [\s\S] - any character includes `\n` 2. (?:"undefined|") - to skip undefined
// 3. [\,"] - the value `aria-label` usually contains `,`, and certainly ends with `"`
// 4. (?:..userLocation..)? - such text may not appear in some cases
var y = [...t.matchAll(re)].map(function(a) {return "<tr><td>"+a.slice(1,).join("</td><td>")+"</td></tr>\n";});
document.body.innerHTML = '<table border="1" style="display:block;overflow:auto;height:'+window.innerHeight+'px;width:100%;"><tr><th>'+['o365','name','title','loc','role'].join("</th><th>")+("</th></tr>\n")+ y.join("") +'</table>';
})();
