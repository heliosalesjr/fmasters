

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        console.log(primos(num1, num2));
        rl.close();
    });
    }
);

function primos(num1, num2) {
  let primos = [];
  for (let i = num1; i <= num2; i++) {
    if (isPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}