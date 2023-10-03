// # Password generator

// - chiedere all'utente il suo nome
    // - dichiarare una variabile per nome
let userName

//     - assegnare alla variabile il valore ricevuto
userName = prompt('Ciao, Inserisci il tuo nome?')
console.log(userName)

// - chiedere il suo cognome
//     - dichiarare una variabile per cognome
let userSurname

//     - assegnare alla variabile il valore ricevuto
userSurname = prompt('Inserisci il tuo Cognome?')
console.log(userSurname)

// - chiedere il suo colore preferito
//     - dichiarare una variabile per colore preferito
let favoriteColour

//     - assegnare alla variabile il valore ricevuto
favoriteColour = prompt('Inserisci il tuo colore preferito')
console.log(favoriteColour)

// - inserire il numero per creare la password
    // - assegnare alla variabile il numero
let numberForPassword = Math.floor(Math.random(5) * 101);
console.log(numberForPassword)

// - concatenazione del risultato ricevuto
//      - dichirare una varialbile con concatenazione con dati ricevuti
let message = userName + userSurname + favoriteColour + numberForPassword
console.log(message)