

// Soução 1
function verificarPalindromo(string){
    if(!string) return "String não existe !";

   return string.split("").reverse().join("") === string;
}

console.log(`Solução 01: ${verificarPalindromo("ovo")}`);


/*Solução 2 */

function verificarPalindromo2(string){
    if(!string) return "String não existe !";

    for(let i = 0; i < string.length / 2; i++){
       if( string[i] !== string[string.length -1 - i]){
           return false;
       }
    }
    return true;
}

console.log(`Solução 02: ${verificarPalindromo2("abba")}`);


