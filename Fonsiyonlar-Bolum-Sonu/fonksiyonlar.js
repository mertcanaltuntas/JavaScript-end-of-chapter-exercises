
let counter = 0  // şimdilik değeri 0 verdik
let counterDOM = document.querySelector('#counter') //counter increase ve decrease idlerini birer değişkene atadık
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")



counterDOM.innerHTML = counter // counter id'sinin innerHTML'ine yukardaki counter bilgisini yazdırdık

increaseDOM.addEventListener("click", clickEvent) //HTML de yaptığımız butonlara tıklama özelliği ekledik
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {  //burası tıkladığımızda ne olacağının yazıldığı fonksiyon
    console.log(this.id) // burası konsolda işlemleri görebilmek için bir önemi yok
    if(this.id == "increase") { // eğer bu id increase id sine eşitse yani sen attır butonuna tıkladıysan counterDOM'un innerHTML'ine counter a bir ekle komutu verdik
        counterDOM.innerHTML = counter +=1
    } else {
        counterDOM.innerHTML = counter -=1  // değilse counterDOM'un innerHTML'ine counter'dan bir çıkar komutu verdik
    }
}


///////////////////////////////////////////////// ALTERNATİF FONKSİYON AŞAĞIDA VERİLMİŞTİR////////////////////////////////////////////////////////



// function clickEvent() {
//     console.log(this.id)
//     this.id == "increase" ?  counter +=1 :  counter -=1
//     counterDOM.innerHTML = counter
// }


