const search = (str) => {
  const options = ["ok", "bien", "good", "Mayra", "Jose", "Bauti", "Luz"]
  for (let i = 0; i < options.length; i++) {
    if (str == options[i]) {
      return i;      
    }
  }
  return -1;
}
console.log(search("Bauti"));