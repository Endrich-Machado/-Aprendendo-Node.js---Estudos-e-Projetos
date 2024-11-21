const quest = () => {
    return new Promise((resolve) => {

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question('Qual a sua linguagem preferida? ', (language) => {
        console.log(`A minha linguagem preferida é ${language}`); 
            
            

            setTimeout(()=> 
            {
                resolve("Resolvido após 3 segundos");
                readline.close();
                console.clear();
            }, 
            3000)
        });
    });
};


(async () => {
    

    const resultado = await quest();
    console.log(resultado);
    setTimeout(()=> 
        {
            console.clear();
        }, 
        3000)
    
})();