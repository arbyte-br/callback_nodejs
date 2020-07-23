const fs = require('fs');

fs.readFile('arquivo1.json', (erro, arquivo1) => {
    if (erro) {
        console.log('aconteceu um erro');
        return;
    }
    fs.readFile('arquivo2.json', (erro2, arquivo2) => {
        if (erro2) {
            console.log('aconteceu um erro');
            return;
        }
        fs.readFile('arquivo3.json', (erro3, arquivo3) => {
            if (erro3) {
                console.log('aconteceu um erro');
                return;
            }
            fs.readFile('arquivo4.json', (erro4, arquivo4) => {
                if (erro4) {
                    console.log('aconteceu um erro');
                    return;
                }

                fs.readFile('arquivo5.json', (erro5, arquivo5) => {
                    if (erro5) {
                        console.log('aconteceu um erro');
                        return;
                    }

                    const arquivo1J = JSON.parse(arquivo1);
                    const arquivo2J = JSON.parse(arquivo2);
                    const arquivo3J = JSON.parse(arquivo3);
                    const arquivo4J = JSON.parse(arquivo4);
                    const arquivo5J = JSON.parse(arquivo5);

                    const objetos = [...arquivo1J, ...arquivo2J, ...arquivo3J, ...arquivo4J, ...arquivo5J];
                    console.log(objetos);
                });
            });
        });
    });
});

console.log('Lendo arquivo');
