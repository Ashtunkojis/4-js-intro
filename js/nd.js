// Kintamųjų inicijavimas
const kintamasis1 = 1;
console.log(kintamasis1)
const kintamasis2 = 5;
console.log(kintamasis2)
const kintamasis3 = 10;
console.log(kintamasis3)
const vardas = 'Andrius';
console.log(vardas)
const pavarde = 'Kubilius';
console.log(pavarde)
const miestas = 'Siauliai';
console.log(miestas)
const pirmaEile = [1, 2, 3, 4, 5];
console.log(pirmaEile)
const antraEile = [2, 4, 6, 8, 10];
console.log(antraEile)
const treciaEile = [2, 4, 16, 256, 65536];
console.log(treciaEile)
const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc)
const fgh = ['f', 'g', 'h', 'i', 'j'];
console.log(fgh)
const klm = ['k', 'l', 'm', 'n', 'o'];
console.log(klm)

// Veiksmai su kintamaisiais

const skaiciuSuma = (kintamasis1 + kintamasis2 + kintamasis3);
console.log(skaiciuSuma)
const sujungtasTekstas = (vardas + ' ' + pavarde + ' ' + miestas);
console.log(sujungtasTekstas)
const verteSarasu1 = (pirmaEile[0] - pirmaEile[1] + pirmaEile[2] - pirmaEile[3] + pirmaEile[4]);
console.log(verteSarasu1)
const verteSarasu2 = (antraEile[0] - antraEile[1] + antraEile[2] - antraEile[3] + antraEile[4]);
console.log(verteSarasu2)
const verteSarasu3 = (treciaEile[0] - treciaEile[1] + treciaEile[2] - treciaEile[3] + treciaEile[4]);
console.log(verteSarasu3)
const sujungtiTekstai1 = (abc[4] + ', ' + abc[3] + ', ' + abc[2] + ', ' + abc[1] + ', ' + abc[0]);
console.log(sujungtiTekstai1)
const sujungtiTekstai2 = (fgh[4] + ', ' + fgh[3] + ', ' + fgh[2] + ', ' + fgh[1] + ', ' + fgh[0]);
console.log(sujungtiTekstai2)
const sujungtiTekstai3 = (klm[4] + ', ' + klm[3] + ', ' + klm[2] + ', ' + klm[1] + ', ' + klm[0]);
console.log(sujungtiTekstai3)
const sujungtiTekstArray = (abc[4] + ', ' + abc[3] + ', ' + abc[2] + ', ' + abc[1] + ', ' + abc[0] + ', ' + fgh[4] + ', ' + fgh[3] + ', ' + fgh[2] + ', ' + fgh[1] + ', ' + fgh[0] + ', ' +klm[4] + ', ' + klm[3] + ', ' + klm[2] + ', ' + klm[1] + ', ' + klm[0]);
console.log(sujungtiTekstArray)


// Kintamųjų palyginimas
// 1
// a
if (kintamasis2>kintamasis1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// b
if (kintamasis2<kintamasis1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// c
if (kintamasis2===kintamasis1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// d
if (kintamasis2!==kintamasis1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// e
if (kintamasis2>=kintamasis1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// f
if (kintamasis2<=kintamasis1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// 2
console.log(vardas.length);
console.log(pavarde.length);
console.log(miestas.length);
// 3
// a
if (vardas.length>pavarde.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// b
if (vardas.length<pavarde.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// c
if (vardas.length===pavarde.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// d
if (vardas.length!==pavarde.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// e
if (vardas.length>=pavarde.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// f
if (vardas.length<=pavarde.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// 4
console.log(pirmaEile.length)
console.log(antraEile.length)
console.log(treciaEile.length)
//5
//a
if (pirmaEile.length>antraEile.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// b
if (pirmaEile.length<antraEile.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// c
if (pirmaEile.length===antraEile.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// d
if (pirmaEile.length!==antraEile.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// e
if (pirmaEile.length>=antraEile.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// f
if (pirmaEile.length<=antraEile.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
// Funkcijos
// 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:

function skaitmenuKiekisSkaiciuje(ilgasSkaicius) {
    if (typeof ilgasSkaicius !== 'number'){
        return 'Pateikta netinkamo tipo reikšmė'
    }
    if (isNaN(ilgasSkaicius)){
        return 'Pateikta netinkamo tipo reikšmė'
    }
    const kintIlgis = ilgasSkaicius.toString().length;
    return kintIlgis;
}
const s1 = skaitmenuKiekisSkaiciuje(5);
const s2 = skaitmenuKiekisSkaiciuje(781);
const s3 = skaitmenuKiekisSkaiciuje(37060123456);
const s4 = skaitmenuKiekisSkaiciuje(true);
const s5 = skaitmenuKiekisSkaiciuje("asd");
const s6 = skaitmenuKiekisSkaiciuje(NaN);

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)
console.log(s6)