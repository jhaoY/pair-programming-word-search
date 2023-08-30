const transpose = (letters) => {
    let transposed = [];
    for (let i = 0; i < letters[0].length; i++) {
        let tempRow = [];
        for (let j = 0; j < letters.length; j++) {
            tempRow.push(letters[j][i]);
        }
        transposed.push(tempRow);
    }
    return transposed;
}
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    if (letters.length === 0) {
        throw new Error("Empty Array!");
    }
    if (word.length === 0) {
        throw new Error("Empty String!");
    }
    
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false;
}

module.exports = wordSearch