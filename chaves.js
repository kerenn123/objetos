const cliente = {
    nome: "Joao",
    idade: 24, 
    email: "joao@firma.com",
    telefone: ["11555555550", "114444444"],
};

cliente.enderecos = [
{
Rua: "Rua Joseph Climber",
numero: 1337,
apartamento: true,
complemento: "ap 934",  
}
];

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessario ter um endereço cadastrado");
}

