function laCajaDePabdora(binary) {
    // Your code here:
    console.log(binary);
    console.log(binary.length - 1);
  
    const num = binary[0];
    console.log(num);
    const sum = num * 2 ** (binary.length - 1);
    console.log(sum);
    const restantes = binary.slice(1, binary.length);
    console.log(restantes);
    // if (restantes) return sum + laCajaDePabdora(restantes);
    // else return sum;
    return restantes ? sum + laCajaDePabdora(restantes) : sum;
  } // Complejidad temporal: O(n)
  
  //console.log(laCajaDePabdora("10")); //(2)
  console.log(laCajaDePabdora("111")); //(7)


  function guille(){
    return{
        nombre: "guille",
        edad: 32,
        nacionalidad: "argentina"    
    }
  }