// Soal 1
const angkaSoal1: number = 9;
let barisSoal1: number = 10;
for (let i = 0; i < barisSoal1 + 1; i++) {
  console.log(`${angkaSoal1} x ${i} = ${angkaSoal1 * i}`);
}

// Soal 2
const kataSoal2: string = "Madam";
let balik = "";
for (let i = kataSoal2.length - 1; i >= 0; i--) {
  balik += kataSoal2[i];
}
if (balik.toLowerCase() == kataSoal2.toLowerCase()) {
  console.log(`${kataSoal2} Termasuk Palindrom `);
} else {
  console.log(`Not a Palindrom`);
}

// Soal 3
const angkaSoal3: number = 10000;
let hasilSoal3: number = angkaSoal3 / 100000;
console.log(`${angkaSoal3} dalam bentuk kilometer adalah ${hasilSoal3} Km`);

// Soal 4
const uang: number = 3020;
let rupiah: string = "";
let uang2 = uang.toString();
for (let i = uang2.length - 1, j = 0; i >= 0; i--, j++) {
  rupiah = uang2[i] + rupiah;
  if (j % 3 === 2 && i > 0) {
    rupiah = "." + rupiah;
  }
}

rupiah = "Rp." + rupiah +",00"
console.log(rupiah);
//cara 2
// const jumlahUang : number = 10000;
// const hasilUang: Intl.NumberFormat = new Intl.NumberFormat("id-ID",{
//   style : "currency",
//   currency : "IDR",
//   maximumSignificantDigits: 0,
// }).format(jumlahUang)
// console.log(hasilUang);

// Soal 5
const kataSoal5: string = "Hello World";
let kataCari: string = "llo";
let hasil = kataSoal5.replace(kataCari, "");
console.log(hasil);

// Soal 6
const kataSoal6: string = "halo semua";
let pisah = kataSoal6.split(" ");
console.log(pisah);
for (let i = 0; i < pisah.length; i++) {
  pisah[i] = pisah[i][0].toUpperCase() + pisah[i].slice(1);
}
console.log(pisah.join(" "));

// let kata1 = pisah.slice(0);
// let kata2 = pisah.slice(1);
// let gantiKapital1 = kata1[0][0].toUpperCase();
// let gantiKapital2 = kata2[0][0].toUpperCase();
// //
// let kataAkhir = gantiKapital1
// console.log(kataAkhir);

// Soal 7
const kataInput: string =  "The QuiCk BrOwN Fox SaTu DUa TiGA emPAT LiMa" ;
let hasilTarget = "";
for (let i = 0; i < kataInput.length; i++) {
  let char = kataInput[i];
  if (char >= "A" && char <= "Z") {
      hasilTarget += char.toLowerCase();
  } else if (char >= "a" && char <= "z") {
      hasilTarget += char.toUpperCase();
  } else {
      hasilTarget += char;
  }  
}

console.log(hasilTarget);



// Soal 8
const angkaSoal8: number = 8;
const angka2Soal8: number = 4;

if (angka2Soal8 > angkaSoal8) {
  console.log(`${angka2Soal8} , ${angkaSoal8} `);
} else {
  console.log(`${angkaSoal8} , ${angka2Soal8} `);
}
// Soal 9
const number1Soal9: number = 1;
const number2Soal9: number = 2;
const number3Soal9: number = 3;
let c = Math.max(number1Soal9, number2Soal9, number3Soal9);
let d = Math.min(number1Soal9, number2Soal9, number3Soal9);
let e = number1Soal9 + number2Soal9 + number3Soal9 - c - d;
console.log(`Angka terbesar ke terkecil ${c} , ${e} , ${d} `);

// Soal 10
const kata: any = true;
let kosong = typeof kata;
console.log(kosong);

if (kosong === "string") {
  console.log("1");
} else if ((kosong === "number")) {
  console.log("2");
} else {
  console.log("3");
}

// Soal 11
const kataSoal11: string = "An apple day keeps the doctors away";
const kataKecil: string = kataSoal11.toLowerCase();
let hasilCari11 = kataKecil.replaceAll("e".toLowerCase(), "*");
console.log(hasilCari11);

// for (let i = kataSoal11.length; i>=0; i++){
//     if(kataSoal11[i]===kataCari){
//         hasilCari11 += kataSoal11[i].replace('*')
//     }
// }
