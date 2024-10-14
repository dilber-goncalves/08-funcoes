function faixaEtaria(idade) {
    if (idade <= 21) {
        return 'jovem';
    }else if(idade <= 65){
        return 'adulto';
    }else{
        return 'idoso(a)';
    }
} 

console.log(faixaEtaria(20));
console.log(faixaEtaria(80));
console.log(faixaEtaria(55));
console.log(faixaEtaria(65));