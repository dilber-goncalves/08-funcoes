const usuario = {
    nome: 'Dilber',
    idade: 28,
    profissao: 'Professor',
    altura: 1.69
}

function apresentacao(dadosUsuario){
    console.log(`Olá, meu nome é ${dadosUsuario.nome}, sou um jovem de ${dadosUsuario.idade} anos, ${dadosUsuario.altura}m de altura e sou ${dadosUsuario.profissao}.`);
}

apresentacao(usuario);