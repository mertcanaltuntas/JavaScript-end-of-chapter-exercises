
const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
// Üstteki Kısım Emojilerin Tanımlandığı Yer 

let examGrade = prompt("Lütfen Notunuzu Giriniz") // Burada kullanıcan sınav bilgisi alındı ve examGrade'e tanımlandı 
let textInfo; // textInfo bilgisi şimdilik boş bırakıldı bilgisi aşağıda verilecek
let info = document.querySelector("#info") // Burada info id sinin bulunduğu yer let info ile infoya tanımlandı

if ( examGrade >=0 && examGrade <= 100 ) { // burada not bilgisinin 0 ve 100 aralığında olacağını belirttik ve alttaki yapıyı bunun içinde yazarak sadece bu aralıkta çalışmasını istedik
    textInfo = SMILE // textInfı şimdilik gülücük emojisi oldu
    info.classList.add('text-primary') // infonun classList'ine özellik ekledik bir sonraki class tanımlamasına kadar yazılar primary olacak

    if(examGrade >=90){
        textInfo += "AA" // koşullar belirlendi ve bu koşulların sonunda textInfo bilgisine += ile harf notu eklendi gülücük zaten textInfo da vardı FF notuna kadar böyle
    }
    else if (examGrade >= 85 ){
        textInfo += "BA"
    }
    else if (examGrade >= 80 ){
        textInfo += "BB"
    }
    else if (examGrade >= 75 ){
        textInfo += "CB"
    }
    else if (examGrade >= 70 ){
        textInfo += "CC"
    }
    else if (examGrade >= 65 ){
        textInfo += "DC"
    }
    else if (examGrade >= 60 ){
        textInfo += "DD"
    }
    else if (examGrade >= 50 ){
        textInfo += "FD"
    }
    else if (examGrade < 50){
        textInfo = `${FROWN} FF` // textInfo bilgisi burda yani 50 nin altında üzgün surat ve FF olarak değiştirildi
        info.classList.remove('text-primary')
        info.classList.add('text-danger') // burada yukarda tanımladığımız primary renk remove ile kaldırıldı yerine danger renk eklendi 

    }
}
else {
    textInfo = "Bilgiler Doğru Değil"  //Yukarıda tanımaldığımız aralığın dışında ya da tanımsız ya da boş bir değer girilirse bu satır çalışcak yani ekranda Bilgiler Doğru Değil Yazacak
}

info.innerHTML = `${textInfo} = ${examGrade}` // infonun HTML bilgisine emoji = ile karşısına girdiğimiz not yazılcak