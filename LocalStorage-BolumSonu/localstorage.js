
let counter =  localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0 // local deki counter değerine bak number türünde bir counter değeri varsa kendini yazdır yoksa 0 yazdır 
let counterDOM = document.querySelector('#counter') //counter increase ve decrease idlerini birer değişkene atadık
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")



counterDOM.innerHTML = counter // counter id'sinin innerHTML'ine yukardaki counter bilgisini yazdırdık

increaseDOM.addEventListener("click", clickEvent) //HTML de yaptığımız butonlara tıklama özelliği ekledik
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {  //burası tıkladığımızda ne olacağının yazıldığı fonksiyon
    this.id == "increase" ? counter +=1 : counter -=1
    localStorage.setItem('counter', counter) // locale counter isminde key ekle ve value si yukardaki counter olsun
    counterDOM.innerHTML = counter
}


