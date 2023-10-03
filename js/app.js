// # Password generator

// - chiedere all'utente il suo nome
    // - inserisci il tuo nome
let userName
//     - assegnare alla variabile il valore ricevuto
userName = prompt('Ciao, Inserisci il tuo nome?')
console.log(userName)    
// - chiedere il suo cognome
//     - inserisci il tuo cognome
let userSurname
//     - assegnare alla variabile il valore ricevuto
userSurname = prompt('Inserisci il tuo Cognome?')
console.log(userSurname)
// - chiedere il suo colore preferito
//     - inserici il tuo colore preferito
let favoriteColour
//     - assegnare alla variabile il valore ricevuto
favoriteColour = prompt('Inserisci il tuo colore preferito')
console.log(favoriteColour)
// - concatenazione del risultato ricevuto
let message = userName + userSurname + favoriteColour
console.log(message)