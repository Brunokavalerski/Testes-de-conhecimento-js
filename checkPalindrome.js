function checkPalindrome(inputString) {
    let str = inputString.split(' ').join(''); // Retira os espaços
    let len = str.length;
    for (let i = 0; i < len/2; i++) { 
      // Compara a primeira letra com a última, a segunda com a antepenúltima e assim sucessivamente. Caso no for igual retorna false.
      if (str[i] !== str[len - 1 - i]) { 
        return false;
      }
    }
    return true;
   }    
   
   console.log(checkPalindrome("olho"));
   console.log(checkPalindrome("meio-dia"));
   console.log(checkPalindrome("descafeinado"));
   console.log(checkPalindrome("taco cat"));
   console.log(checkPalindrome("racecars"));
   console.log(checkPalindrome("aabaa"));
   console.log(checkPalindrome("abac"));