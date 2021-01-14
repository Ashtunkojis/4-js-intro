// Kintamųjų inicijavimas
const kintamasis1 = 5;
console.log(kintamasis1)
const kintamasis2 = 10;
console.log(kintamasis2)
const kintamasis3 = 15;
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