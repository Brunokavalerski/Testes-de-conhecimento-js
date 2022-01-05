function isIpv4Address(inputString) {
    var blocks = inputString.split(".");
    if(blocks.length === 4) { // verifica se o ip possui 4 blocos
      // every - testa se todos os elementos do array passam pelo teste implementado pela função fornecida
      return blocks.every(
        function(block) {
          
          if (block.length > 1 && block.substr(0, 1) === '0') { // verifica se o block tem mais de um digito e se o primeiro digito é igual a zero
            return false;  
          } 
          return parseInt(block,10) >=0 && parseInt(block,10) <= 255; // verifica se o block esta entre 0 e 255
        }
      );
    }
    return false;
  }
  
  console.log(isIpv4Address("192.168.0.1"));
  console.log(isIpv4Address("255.255.255.255"));
  console.log(isIpv4Address("280.100.92.101"));
  console.log(isIpv4Address("255.100.81.160.172"));
  console.log(isIpv4Address("1..0.1"));
  console.log(isIpv4Address("17.233.00.131"));
  console.log(isIpv4Address("17.233.01.131"));