let pessoas = [];

    const ciclope = {
        nome: "ciclope",
        idade: 17,
    };

    const wolverine = {
        nome: "Wolverine",
        idade: 18,
    };

    const charlesXavier = {
        nome: "Charles Xavier",
        idade: 15,
    };

    const fera = {
        nome: "Fera",
        idade: 24,
    };

    const tempestade = {
        nome: "Tempestade",
        idade: 29,
    };

    pessoas.push(ciclope);
    pessoas.push(wolverine);
    pessoas.push(charlesXavier);
    pessoas.push(fera);
    pessoas.push(tempestade);

const maiorOuIgualQueDezoito = pessoas.filter(pessoa => pessoa.idade >= 18);

console.table(maiorOuIgualQueDezoito);
