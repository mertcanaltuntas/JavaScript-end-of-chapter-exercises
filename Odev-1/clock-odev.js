

let name = prompt("Lütfen Kullanıcı Adınızı Giriniz") // Burda kullanıcıdan prompt ile bilgi aldık

let myName = document.getElementById('myName'); // Buradaki 3 satırlık alanda id ve classları birer değişkene atadık
let myClock =document.getElementById('myClock')
let clock = document.querySelector(".clock")

myName.innerHTML = name // burada myName id sinin olduğu yerin innerHTML ine prompt ile aldığımız bilgiyi yazdırdık yani isim

const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const d = new Date();
let day = weekday[d.getDay()];        // Burada gün tanımlamamızı yaptık


clock.innerHTML = day          // yukarıda yaptığımız gün ayarını innerHTML ile yerine gönderdik

function showTime(){  
        const today = new Date()
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        m = checkTime(m);
        s = checkTime(s);
        myClock.innerHTML = `${h} :  ${m}  :  ${s}   ${day}` ;
        setTimeout(showTime, 1000);


    }


      function checkTime(i) {
      if ( i < 10 ) { i = "0" + i } ;
      return i ;
    }

      showTime()
