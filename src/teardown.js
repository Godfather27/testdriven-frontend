module.exports = function(x, n) {
  if(n === "lower") {
    return x.toLowerCase()
  }
  
  if(n === "upper") {
    return x.toUpperCase()
  }
  
  if(n === "capitalized") {
    return (x[0].toUpperCase() + x.substring(1).toLowerCase())
  }
  
  if(n === "reversed") {
    return x.split("").reverse().join("");
  }
}
