let salario = parseFloat(prompt("Digite o salário do funcionário:"));
let percentual = parseFloat(prompt("Digite o percentual de aumento:"));
let aumento = salario * (percentual / 100);
let novoSalario = salario + aumento;
alert("O valor do aumento é de: " + aumento);
alert("O novo salário é de: " + novoSalario);
