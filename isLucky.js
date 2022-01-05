function isLucky(n) {    
    let leftSum = 0;
    let rightSum = 0;
    
    n = n.toString(); // converte n(inteiro) para n(string)
    let len = n.length;
  
    for(let i = 0; i < len / 2; i++) {         
        leftSum += parseInt((n[i])); // converte a string em um inteiro para realizar a soma
        rightSum += parseInt((n[len - 1 - i])); // converte a string em um inteiro para realizar a soma
    } 
         
    return leftSum == rightSum; // compara se a soma de cada metade são iguais      
}

console.log(isLucky(1230));
console.log(isLucky(239017));