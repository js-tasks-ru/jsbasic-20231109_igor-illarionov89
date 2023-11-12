function factorial(n) {
  let result = n;
  if (n == 0){return result = 1}
  for (let i = 1; i < n; i++){result *= i; 
  }
  return result;
}
