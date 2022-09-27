function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

const sentence = 'my name is ghost';
console.log('Total words: '+getWordCount(sentence));