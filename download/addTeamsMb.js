/***************************************************
Skryptozakładka:
Lista użytkowników o365 dodawana hurtowo do MS Teams
***************************************************/
javascript: (() => { //https://www.freecodecamp.org/news/what-are-bookmarklets/

  const dely=1000; //pomiędzy kolejnymi osobami
  const liSep=/[,;\s]+/; //lista rozdzielona przecinkami, średnikami i dowolnymi białymi znakami, w tym nowego wiersza
  const uTst=/.@.../; //wzorzec do walidacji
  const msgOpenW= '!\nNajpierw otwórz okno: Dodawanie członków do zespołu... \nFirst, open the window: Add members to team...';
  const msgPrpt= 'Tu wklej listę członków: * Paste member list here:';
  const msgCdnt= '!!\nNie można znaleźć/dodać:\nCould not find/add:\n!!\n';
  const sInp='div.ts-people-picker input[data-tid="peoplePicker"]';
  const sDrop='div[data-tid="peoplepicker-dropdown"]';
  const sAdd='button.ts-btn[data-tid="createTeam-AddMembers"]';
  
  //rslv==resolve, rjct==reject
  
  const checkElem = (sel, fnTrue, tmOut=2500) => {
    return new Promise((rslv, rjct) => {
      setTimeout(() => {
        // rjct(`err: $('${sel}')`) // to stop in catch(err){}
        rslv( $('') );
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
  
  let $inp = $(sInp);
  if (! $inp.length) {alert(msgOpenW); return;}; //'! Najpierw otwórz okno "Dodawanie członków do zespołu"... First, open the "Add members to team" window...';
  try {
    (async () => {
      const users=prompt(msgPrpt).split(liSep);//'Tu wklej listę członków * Paste member list here:';
      for (const user of users) {
        if (uTst.test(user)) { console.log('====='+user);
          await checkElem(sAdd,(sel)=> $(sel).prop('disabled')); //w gotowości do wpisywania, tj, 'disabled'
          $inp = $(sInp); $inp.focus().val(user); //pokazuje się tekst w <input>
          $inp.change(); //zaraz pojawi się lista wyboru
          let selDrop = await checkElem(sDrop,(sel)=>$(sel).text().trim(),7000);
          //console.log  ('selDrop= ',selDrop);
          if (! selDrop.length) alert(msgCdnt + user);//'!! Nie można znaleźć/dodać:  Could not find/add: !! ';
          else {//jest lista i zawiera jakiś niepusty tekst ...text().trim() //np. "Centrum E-learningu CEL2" 
            $(sInp).trigger({type: 'keydown', which: 9, keyCode: 9}); //naciskam kl. <tab> -  przycisk Dodaj staje sie niebieski
            let selAdd = await checkElem(sAdd,(sel)=>! $(sel).prop('disabled')); //sprawdzam, że nie jest 'disabled'
            //console.log  ('selAdd= ',selAdd);
            if (! selAdd.length) alert(msgCdnt + user);
            else {
              selAdd.click();
              $(sInp).focus(); //tak dla zabicia czasu
              await new Promise(rslv => setTimeout(rslv, dely)); //jeszcze więcej zabijania czasu
              await checkElem(sAdd,(sel)=> $(sel).prop('disabled')); //zrobione = Add 'disabled'
            }
          }
        } //if
      } //for
    })(); //async
  } catch (err) { alert(err); }
})();