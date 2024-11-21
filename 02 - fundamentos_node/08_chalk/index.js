(async () => {
    let nota;

    const chalk = await import('chalk');

    // Função que retorna uma Promise, resolvendo o valor de nota após o delay
    const definirNota = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                nota = 6;
                resolve(nota);  // Resolva a Promise com o valor de nota
            }, 2000);  // Atribui 6 à nota após 2 segundos
        });
    };

    // Aguarda o valor de nota ser atribuído
    await definirNota();

    // Agora a nota já foi definida, podemos fazer a avaliação الخير
    if (nota <= 5) {
        console.log(chalk.default.bgRedBright('Você está de recuperação '));
    } else {
        console.log(chalk.default.bgGreenBright(`Você foi aprovado com a nota: ${nota}`));
    }
})();