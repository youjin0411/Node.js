const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const limitwords = [];

const result = words.filter(function(word) {
    // 단어의 길이아 6보다 큰 단어만 필터링
    if (word.length > 6) {
        limitwords.push(word);
    }
    return limitwords;
});
console.log(limitwords);