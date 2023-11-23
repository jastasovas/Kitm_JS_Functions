//---------------- Unit 1 --------------------------

// function hello() {
//   return "Pasveikinimas, pasveikinimas, pasveikinimas!!!";
// }
// let pasveikinimas = hello();
// console.log(pasveikinimas);

// function greeting(vardas, pasveikinimas) {
//   return `Hello ${vardas}, ${pasveikinimas}`;
// }
// console.log(greeting("Justas", pasveikinimas));
// console.log(greeting("Bembis", pasveikinimas));

//---------------- Unit 2 --------------------------

// function whichBigger(numberOne, numberTwo) {
//   if (numberOne > numberTwo) {
//     console.log("Pirmas skaicius didesnis.");
//   } else if (numberOne == numberTwo) {
//     console.log(numberOne + numberTwo, "Skaiciai lygus.");
//     return numberOne + numberTwo;
//   } else {
//     console.log("Antras skaicius didesnis");
//   }
// }

// let sum = whichBigger(10, 10);

//---------------- Unit 3 --------------------------

// function fizzAndBuzz(string) {
//   if (string == "fizz") {
//     console.log("bazz");
//   } else if (string == "bazz") {
//     console.log("fizz");
//   } else {
//     console.log("Please provide fizz or buzz");
//   }
// }

// fizzAndBuzz("bazz");

//---------------- Unit 4 --------------------------

// function canIMakeTriangle(pirma, antra, sum) {
//   if (pirma == antra || antra == sum || pirma == sum) {
//     console.log("Gauname lygiasoni trikampi.");
//   } else if (pirma == antra && antra == trecia) {
//     console.log("Gauname lygiakrasti trikampi.");
//   } else if (
//     pirma + antra > sum &&
//     pirma + sum > antra &&
//     antra + sum > pirma
//   ) {
//     console.log("Gauname ivairiakrasti trikampi.");
//   } else {
//     console.log("Galbut ivedet neteisingus duomenis...");
//   }
// }

// canIMakeTriangle(10, 12, sum);

//---------------- Unit 5 --------------------------
// Nezinau ar gerai supratau sita uzduoti... su googl'o pagalba taip gavosi.
// let pasirinkimas = prompt("Kvadratas ar staciakampis?");
// function squareOrRectangle(pasirinkimas) {
//   if (pasirinkimas == "kvadratas") {
//     let krastine = prompt("iveskit krastine:");
//     alert(`Kvadrato plotas = ${krastine ** 2}`);
//   } else if (pasirinkimas == "staciakampis") {
//     let pirmoji = prompt("iveskit pirma krastine");
//     let antroji = prompt("iveskit antra krastine");
//     alert(`Staciakampio plotas: ${pirmoji * antroji}`);
//   } else {
//     alert("kazkas negerai");
//   }
// }

// function returnFirstFunction(funkcija, pasirinkimas) {
//   return funkcija(pasirinkimas);
// }

// returnFirstFunction(squareOrRectangle, pasirinkimas);

//---------------- Unit 6 --------------------------

// function isSeven(x) {
//   return x == "7" ? true : false;
// }

// console.log(isSeven(7));

//---------------- Unit 7 --------------------------

// function isEqual(vienas, du) {
//   return vienas === du;
// }
// console.log(isEqual(1, true));
// console.log(isEqual(1, 1));

//---------------- Unit 8 --------------------------

// function toCheck(prob, prize, pay) {
//   return prob * prize > pay;
// }
// console.log(toCheck(2, 2, 6));

//---------------- Unit 9 --------------------------

// function convertToSeconds(minutes) {
//   let secs = minutes * 60;
//   console.log(`${minutes} mins = ${secs} secs`);
// }
// convertToSeconds(2);

//---------------- Unit 10 --------------------------

// let numb1 = parseInt(prompt("Enter first number:"));
// let sign = prompt("Enter operation sign: ");
// let numb2 = parseInt(prompt("enter second number:"));
// function calculator(numb1, sign, numb2) {
//   switch (sign) {
//     case "+":
//       let sum = numb1 + numb2;
//       alert(`${numb1} ${sign} ${numb2} = ${sum}`);
//       break;
//     case "-":
//       let sub = numb1 - numb2;
//       alert(`${numb1} ${sign} ${numb2} = ${sub}`);
//       break;
//     case "*":
//       let multip = numb1 * numb2;
//       alert(`${numb1} ${sign} ${numb2} = ${multip}`);
//       break;
//     case "/":
//       let div = numb1 / numb2;
//       alert(`${numb1} ${sign} ${numb2} = ${div}`);
//       break;
//     default:
//       alert("Something is wrong");
//   }
// }

// calculator(numb1, sign, numb2);
