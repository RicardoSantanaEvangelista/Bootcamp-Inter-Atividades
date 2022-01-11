const alunos = [
    {nome: "João", nota: 10, turma: "1A" },
    {nome: "Sofia", nota: 9, turma: "1A" },
    {nome: "Paulo", nota: 5, turma: "2C" },
    {nome: "Luiz", nota: 6, turma: "3A" },
    {nome: "Bruna", nota: 4, turma: "1B" },
    {nome: "Lara", nota: 7, turma: "2B" },
];





function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;

}

console.log(alunosAprovados(alunos, 5));


