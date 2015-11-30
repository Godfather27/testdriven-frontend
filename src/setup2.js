module.exports = function(n) {
  if (n.constructor === Array) {
    if(n.length === 0)
      return n
    for(var i=0; i<n.length; i+=1){
      n[i] = Math.round(((1/2)* (n[i].y - n[i].x) * (n[i].z - n[i].x))*10000)/10000
    }
    return n
  }
  throw new Error('Does only accept scalar input')
}