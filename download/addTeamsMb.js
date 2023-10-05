/***************************************************
Skryptozakładka:
Lista użytkowników o365 dodawana hurtowo do MS Teams
***************************************************/

var dely=1000; //pomiędzy kolejnymi osobami
var msgPrpt= 'To podaj (wklej) listę członków:';
var liSep=/[,;\s]+/; //lista rozdzielona przecinkami, średnikami i dowolnymi białymi znakami, w tym nowego wiersza
var msgOpenW= 'Otwórz okno "Dodawanie członków do zespołu"';
var msgNtFnd= '!! Chyba nie można znaleźć/dodać: ';
var msgNtClk= '!!! Nie można kliknąć "Dodaj" dla: ';
var sInp='div.ts-people-picker input[data-tid="peoplePicker"]';
var sDrop='div[data-tid="peoplepicker-dropdown"]';
var sAdd='button.ts-btn[data-tid="createTeam-AddMembers"]';

//rslv==resolve, rjct==reject

var checkElem = (sel, fnTrue, tmOut=2500) => {
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

var $inp = $(sInp);
if (! $inp.length) alert(msgOpenW);
else {
  try {
    (async () => {
      const users=prompt(msgPrpt).split(liSep);
      for (const user of users) {
        if (user.length >= 4) {
          console.log('===== user ===== ' + user);
          await checkElem(sAdd,(sel)=> $(sel).prop('disabled')); //w gotowości do wpisywania, tj, 'disabled'
          $inp = $(sInp);
          $inp.focus().val(user); //pokazuje się tekst w <input>
          $inp.change(); //zaraz pojawi się lista wyboru
          const selDrop = await checkElem(sDrop,(sel)=>$(sel).text().trim(),7000);
          //console.log  ('selDrop= ',selDrop);
          if (! selDrop.length) {alert(msgNtFnd + user)}
          else {//jest lista i zawiera jakiś niepusty tekst $down.text().trim() //np. "Centrum E-learningu CEL2" 
            $(sInp).trigger({type: 'keydown', which: 9, keyCode: 9}); //naciskam kl. <tab> -  przycisk Dodaj staje sie niebieski
            const selAdd = await checkElem(sAdd,(sel)=>! $(sel).prop('disabled')); //sprawdzam, że nie jest 'disabled'
            //console.log  ('selAdd= ',selAdd);
            if (! selAdd.length) {alert(msgNtClk + user)}
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
  } catch (err) {
    alert('!! '+err);
  }
}
