const a = 10; 
const b = "textoooo"; 
const c = [1,'d',8,'b'];

console.log(a, b, c);


//contagem de impressões
console.count(`o valor de a é : ${a} contagem`);
console.count(`o valor de a é : ${a} contagem`);

//interpolação

console.log("O número %d", a);

//limpar o console

setTimeout(()=>console.clear(), 1000);