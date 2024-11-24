import chalk from 'chalk';  
import inquirer from 'inquirer';

inquirer.prompt([{
    name: 'nome',
    message: "digite um nome"
}, {
    name: 'Sobrenome',
    message: "digite o sobrenome"
}]).then((answers) => {
    console.log(chalk.bgYellowBright.black(`meu nome é ${answers.nome} . ${answers.Sobrenome}`)); 
    console.log(answers);
}).catch(err => {
    console.log(err);
});