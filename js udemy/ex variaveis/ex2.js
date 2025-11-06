let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC)

//[varA, varB, varC] = [varB, varC, varA] <- outra solução

const varTemporaria = varA;
varA = varB
varB = varC
varC = varTemporaria

console.log(varA, varB, varC)