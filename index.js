function laCajaDePandora(numero){
    
        // Your code here:
        console.log(binary);
        console.log(binary.length - 1);
      
        const num = binary[0];
        console.log(num);
        const sum = num * 2 ** (binary.length - 1);
        console.log(sum);
        const restantes = binary.slice(1, binary.length);
        console.log(restantes);
        // if (restantes) return sum + BinaryToDecimal(restantes);
        // else return sum;
        return restantes ? sum + laCajaDePandora(restantes) : sum;
      // Complejidad temporal: O(n)
      
      //console.log(BinaryToDecimal("10")); //(2)
     
} 
console.log(laCajaDePandora("111")); //(7)