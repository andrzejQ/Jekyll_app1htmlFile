/*******************************************************************************
Bookmarklet: // Skryptozakładka:
Bulk Add Users to Microsoft Teams // Zbiorcze dodawanie użytkowników do MS Teams
*******************************************************************************/

javascript: (() => { //https://www.freecodecamp.org/news/what-are-bookmarklets/
//config.:
const dely=1000;      // delay after user added
        //(ms)        //pl: opóźnienie po dodaniu użytkownika 
const liSep=/[,;\s]+/;// separator of a list separated by commas, semicolons 
        //(regexp)    // and any whitespace characters = \s, including newline
                      //pl: separator listy rozdzielonej przecinkami, średnikami 
                      // i dowolnymi białymi znakami = \s, w tym nowego wiersza 
const uTst=/.@.../;   // validation pattern - i.e. @ and a few arbitrary characters around it
        //(regexp)    //pl: wzorzec do walidacji - czyli @ i kilka dowolnych znaków dookoła 
  const lang=(document.documentElement.lang.startsWith('pl')) ? 1 : 0;   // lang=($('html').attr('lang').startsWith('pl')) ? 1 : 0;
  const msgOpenW= '!\n'+[
    'On https://teams.microsoft.com\n'+'open the window: Add members to team...',
    'Na https://teams.microsoft.com\n'+'otwórz okno: Dodawanie członków do zespołu...'][lang];
  const msgPrpt= [
    'Paste member list here:',
    'Tu wklej listę członków:'][lang];
  const msgCdnt= '!!\n'+[
    'Could not find/add:',
    'Nie można znaleźć/dodać:'][lang]+ '\n!!\n';
  const sInp='div.ts-people-picker input[data-tid="peoplePicker"]';
  const sDrop='div[data-tid="peoplepicker-dropdown"]';
  const sAdd='button.ts-btn[data-tid="createTeam-AddMembers"]';
  
  //rslv==resolve, rjct==reject
  
  const checkElem = (sel, fnTrue, tmOut=2500) => {
    return new Promise((rslv, rjct) => {
      setTimeout(() => {
        // rjct(`err: $('${sel}')`) // to stop in catch(err){}
        rslv( $('') ); //just ignore 
      }, tmOut);
  //https://stackoverflow.com/questions/16149431/make-function-wait-until-element-exists#answer-53269990
      (async () => {
        while ( !($(sel).length && fnTrue(sel)) ) {
          await new Promise( rslv =>  requestAnimationFrame(rslv) );
        };
        rslv( $(sel) ); 
      })();
    });
  };
  
  if (! ((window.jQuery) && $(sInp).length)) {alert(msgOpenW); return;};
  try {
    (async () => {
      const users=prompt(msgPrpt).split(liSep);// Paste member list here //Tu wklej listę członków
      for (const user of users) {
        if (uTst.test(user)) { console.log('====='+user);
          await checkElem(sAdd,(sel)=> $(sel).prop('disabled')); //ready to type, i.e. [Add] 'disabled'
                                                                 //w gotowości do wpisywania, tj. [Add] 'disabled'
          let $inp = $(sInp); $inp.focus().val(user); //text is shown in the <input>
                                                      //pokazuje się tekst w <input>
          $inp.change(); //a selection list is about to appear
                         //zaraz pojawi się lista wyboru
          let selDrop = await checkElem(sDrop,(sel)=>$(sel).text().trim(),7000);
          //console.log  ('selDrop= ',selDrop);
          if (! selDrop.length) alert(msgCdnt + user);//'!! Could not find/add:  Nie można znaleźć/dodać: !! ';
          else {// ...text().trim() > ''
            $(sInp).trigger({type: 'keydown', which: 9, keyCode: 9}); //pressed [tab] - the [Add] button becomes blue
                                                                      //naciśnięty [tab] -  przycisk [Dodaj] staje się niebieski
            let selAdd = await checkElem(sAdd,(sel)=>! $(sel).prop('disabled')); //! [Add] 'disabled'
            //console.log  ('selAdd= ',selAdd);
            if (! selAdd.length) alert(msgCdnt + user);
            else {
              selAdd.click();
              $(sInp).focus(); //just to pass the time //tak dla zabicia czasu
              await new Promise(rslv => setTimeout(rslv, dely)); //even more time-killing //jeszcze więcej zabijania czasu
              await checkElem(sAdd,(sel)=> $(sel).prop('disabled')); //done - Add 'disabled'
            }
          }
        } //if
      } //for
    })(); //async
  } catch (err) { alert(err); }
})();