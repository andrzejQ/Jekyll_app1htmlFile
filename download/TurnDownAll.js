//https://github.com/domchristie/turndown
//https://www.reddit.com/r/RoamResearch/comments/hsitd3/bookmarklet_copy_all_the_page_content_to_the/

javascript: Promise.all([import('https://unpkg.com/turndown?module'), import('https://unpkg.com/@tehshrike/readability@0.2.0'), ]).then(
async([{default:TDs}, {default:Rdby}]) => {
  const { title, byline, content } = new Rdby(document.cloneNode(true)).parse();
  const tdPlg = await import('https://unpkg.com/turndown-plugin-gfm?module');
  const tdSrv = new TDs({
    headingStyle: 'atx',
    hr: '- - -',
    bulletListMarker: '*',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
  });
  tdSrv.use(tdPlg.gfm);
  const markdown = tdSrv.turndown(content);
  const roamText = `* [${title}](${document.URL})\n\n${markdown}`;
  document.body.innerHTML = '<pre></pre>';
  document.body.children[0].innerText = roamText;
})