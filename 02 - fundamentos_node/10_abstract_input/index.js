const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "Mensagem_1",
        message: "Qual a primeira nota"
    },  
    {
        name: "mensagem_2",
        message: "Qual a segunda nota"
    }
]).then(answers => {
    console.log(answers);
    const media = (parseInt(answers.Mensagem_1) + parseInt(answers.mensagem_2)) / 2;
    console.log(`A média das notas é: ${media}`);
}).catch(err => console.log(err));