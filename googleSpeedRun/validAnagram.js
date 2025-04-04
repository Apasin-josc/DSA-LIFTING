const anagram = (s,t) =>{
    let mapS = new Map();
    let mapT = new Map();

    if(s.length !== t.length) return false;

    for(let letter of s) mapS.set(letter, (mapS.has(letter) || 0) + 1);
    for(let letter of t) mapT.set(letter, (mapT.has(letter) || 0) + 1);
    
    for(let [key, value] of mapS){
        console.log(key, value);
        if(mapT.get(key) !== value){//si mapT{key,value} !== mapS{key,value} 
            //es como una lista de super mercado
            //tu tienes esto ? yo tambien
            //y esto tambien? yo no -> return false pues
            return false;
        }
    }
    return true;
} 
console.log(anagram("anagram", "nagaram"));