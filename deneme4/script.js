

let sayi = prompt("Bir sayı giriniz");
let toplam = 0;

for(let i=0 ; i<sayi.length ; i++ ){
    let rakam = sayi.chatAt(i);
    toplam+=rakam*rakam*rakam; 
}

if(Number(sayi)==toplam){
    alert("Armstrong sayısıdır ");
}else{
    alert("Armstrong sayısı değildir ");
}