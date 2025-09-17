

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
