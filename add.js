var param1 = parseFloat(prompt("Digite o valor A:"));
var param2 = parseFloat(prompt("Digite o valor B:"));

function add(param1, param2) {
  return param1 + param2;
}

if(isNaN(param1)) {
  alert('param1 invalid');
} else if(param1 < -1000 || param1 > 1000) {
  alert('param1 invalid, o valor deve ser entre -1000 até 1000');
} else if(isNaN(param2)) {
  alert('param2 invalid');
 } else if(param2 < -1000 || param2 > 1000){
     alert('param2 invalid, o valor deve ser entre -1000 até 1000');
} else {
  var soma = add(param1, param2);
  alert('A soma de é: ' + soma);
}

