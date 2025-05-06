/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other. */

const groupAnagrams = (strs) => {
    const anagramsMap = new Map();
    for(let str of strs){
        const key = str.split('').sort().join('');
        //need to find a fucking way of using this keys to addid into my map a key, value

        if(anagramsMap.has(key)){
            //THIS IS THE WAY MI BROTHER 
            //IF WE HAVE THE KEY NOW I KNOW SINCE IM USING AN ARRAY AS VALUE THAT I CAN PUSH IT HERE ! :D
            anagramsMap.get(key).push(str);
        }else{
            //SINCE WE'RE WORKING WITH HASH TABLES WE KNOW THAT WE CAN ADD WHATEVER WE WANT AS KEYS AND VALUES
            //IM GIVING THE KEY that we created to have notion about the multiple words that could have the same letters
            //then im grouping them into an array of strs that's why i declare a [str] array!!!
            anagramsMap.set(key, [str]);
        }
    }
    return Array.from(anagramsMap.values());
    
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


/*
Variación: Solo devolver los grupos que tengan al menos 2 anagramas (descartar los únicos)

Ejemplo:
Input: ["eat","tea","tan","ate","nat","bat"]
Output: [["nat","tan"],["ate","eat","tea"]]

Solución: Igual que el problema original, pero filtramos los valores del Map:
  return Array.from(anagramsMap.values()).filter(group => group.length > 1)

Complejidad:
- Tiempo: O(n * k log k) (igual que el original)
- Espacio: O(nk)
*/



/*
Variación: Devolver el grupo de anagramas que contenga más palabras

Ejemplo:
Input: ["eat","tea","tan","ate","nat","bat"]
Output: ["ate","eat","tea"]

Solución: Después de construir el Map, iterar sobre los valores y devolver el más largo:
  let longest = [];
  for (let group of anagramsMap.values()) {
    if (group.length > longest.length) longest = group;
  }

Complejidad:
- Tiempo: O(n * k log k) + O(n) para encontrar el grupo más largo
- Espacio: O(nk)
*/


/*
Variación: Resolver sin ordenar las letras de las palabras (sin .sort())

Idea: En lugar de ordenar, usamos un "signature" basado en conteo de letras

Pasos:
1. Crear una firma para cada palabra con un array de 26 elementos (cuenta de cada letra).
2. Convertir ese array a string para usarlo como clave del Map.

Ejemplo:
"ate" → [1,0,0,...,1,0,...,1] → "1#0#0#...#1#...#1" como clave

Código para clave:
  const key = new Array(26).fill(0);
  for (let char of str) key[char.charCodeAt(0) - 97]++;
  const finalKey = key.join('#');

Complejidad:
- Tiempo: O(n * k) → más rápido que usar .sort()
- Espacio: O(nk)
*/