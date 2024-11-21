//nome
//console.log(process.argv);

const args = process.argv.slice(2);
const args1 = process.argv.slice(3);


console.log(args);
const nome = args[0].split("=")[1]

console.log(nome);

const idade = args1[0].split("=")[1]
console.log(idade);


console.log(`O meu nome é ${nome} e minha idade é ${idade} anos`);