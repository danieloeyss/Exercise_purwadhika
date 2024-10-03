// Soal 1
const angkaSoal1: number = 9;
let barisSoal1: number = 10;
for (let i = 0; i < barisSoal1+1; i++){
    console.log(`${angkaSoal1} x ${i} = ${angkaSoal1*i}`);
}

// Soal 2
const kataSoal2: string= "Madam";
let balik = "";
for (let i = kataSoal2.length-1;i >= 0; i--){
    balik += kataSoal2[i]
}
if (balik.toLowerCase() == kataSoal2.toLowerCase()){
    console.log(`${kataSoal2} Termasuk Palindrom `);
    
}else{
    console.log(`Not a Palindrom`);   
}

// Soal 3
const angkaSoal3: number = 10000;
let hasilSoal3: number = angkaSoal3/10000 ;
console.log(`${angkaSoal3} dalam bentuk kilometer adalah ${hasilSoal3} Km`);

// Soal 4
//curency

// Soal 5
const kataSoal5: string= "Hello World"
let kataCari: string = "ello"

// Soal 6


// Soal 7


// Soal 8 


// Soal 9
const number1Soal9 : number = 1;
const number2Soal9 : number = 2;
const number3Soal9 : number = 3;
let c = Math.max(number1Soal9,number2Soal9,number3Soal9)
let d = Math.min(number1Soal9,number2Soal9,number3Soal9)
let e = number1Soal9 + number2Soal9 +number3Soal9 - c -d 
console.log(`Angka terbesar ke terkecil ${c} , ${e} , ${d} `);

// Soal 10 
// let isString = true;
// let isNumber = true;
// let check = ;
// if 

// Soal 11
const kataSoal11 : string = "An apple day keeps the doctors away"
const kataKecil : string = kataSoal11.toLowerCase()
let hasilCari11 = kataKecil.replaceAll('a','*');
console.log(hasilCari11);


// for (let i = kataSoal11.length; i>=0; i++){
//     if(kataSoal11[i]===kataCari){
//         hasilCari11 += kataSoal11[i].replace('*')
//     }
// }