const mergeAlternately = (word1, word2) => {
    let i = 0;
    let j = 0;
    let merged = "";
    while(i < word1.length || j < word2.length){
        if(i < word1.length){
            merged += word1[i];
            i++;
        }

        if(j < word2.length){
            merged += word2[j];
            j++;
        }
    }
    if(i < word1.length){
        merged += word1[i];
        i++;
    }

    if(j < word2.length){
        merged += word2[j];
        j++;
    }
    return merged;
}

console.log(mergeAlternately("abc", "pqr"))
