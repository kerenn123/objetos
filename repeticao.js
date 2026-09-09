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

for (let chave in cliente){
    console.log(chave);
}