
// Verisão Original
const somaList = () => {
    const list_number = [2, 4, 5, 7, 11, 13, 15, 22, 25];
        
    for (let i = 0; i < list_number.length; i++) {
 
        for (let j = 0; j < list_number.length; j++) {
            const soma = list_number[i] + list_number[j];
            if(soma === 26) {
                return (soma);
            }
      }
    }
        
}
  

const result = somaList();
console.log(result);


// Função com retorno de valores localizados
const somaList2 = () => {
    const list_number = [2, 4, 5, 7, 11, 13, 15, 22, 25];
        
    for (let i = 0; i < list_number.length; i++) {
 
        for (let j = 0; j < list_number.length; j++) {
            const soma = list_number[i] + list_number[j];
            if (soma === 26) {
                const objReturn = {
                    v1: list_number[i],
                    v2: list_number[j],
                    soma: soma
                }
                return (objReturn);
            }
      }
    }
        
}

const result2 = somaList2();
console.log(result2);

// Função melhorada com tratamento de erros e otimizações
const somaList3 = (
    lista = [2, 4, 5, 7, 11, 13, 15, 22, 25], 
    valorAlvo = 26
) => {
    // Validação de entrada
    if (!Array.isArray(lista)) {
        throw new Error('O primeiro parâmetro deve ser um array');
    }
    
    if (lista.length === 0) {
        throw new Error('A lista não pode estar vazia');
    }
    
    if (typeof valorAlvo !== 'number' || !Number.isFinite(valorAlvo)) {
        throw new Error('O valor alvo deve ser um número válido');
    }
    
    // Verificar se todos os elementos são números
    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] !== 'number' || !Number.isFinite(lista[i])) {
            throw new Error(`Elemento na posição ${i} não é um número válido`);
        }
    }
    
    // Otimização: usar Map para busca O(1) em vez de loop aninhado O(n²)
    const mapaNumeros = new Map();
    
    // Primeira passada: criar mapa dos números e seus índices
    for (let i = 0; i < lista.length; i++) {
        mapaNumeros.set(lista[i], i);
    }
    
    // Segunda passada: buscar complemento
    for (let i = 0; i < lista.length; i++) {
        const complemento = valorAlvo - lista[i];
        const indiceComplemento = mapaNumeros.get(complemento);
        
        if (indiceComplemento !== undefined && indiceComplemento !== i) {
            return {
                v1: lista[i],
                v2: complemento,
                soma: valorAlvo,
                indices: [i, indiceComplemento]
            };
        }
    }
    
    // Se não encontrou nenhuma combinação
    return null;
};

// Teste da função melhorada
try {
    const result3 = somaList3();
    console.log('Resultado somaList3:', result3);
    
    // Teste com lista vazia (deve gerar erro)
    // const resultErro = somaList3([]);
    
    // Teste com valor alvo diferente
    const resultCustom = somaList3([1, 2, 3, 4, 5], 7);
    console.log('Resultado com valor alvo 7:', resultCustom);
    
} catch (error) {
    console.error('Erro capturado:', error.message);
}

