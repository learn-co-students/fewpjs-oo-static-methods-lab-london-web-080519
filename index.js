class Formatter {
  //add static methods here

  static capitalize(string) {
    let newWord = string.substring(1)
    let first = string.slice(0,1).toUpperCase()
    return first+newWord
  }

  static sanitize(string) {
    return string.replace(/[^\w, '-]/g, '')
  }

  static titleize(string) {
    let arr = string.split(' ')

    let answer = arr.map( (word, index) =>  {
      if (index === 0 || index === arr.length-1) {
        return Formatter.capitalize(word)
      } else if (word === 'the' ||
           word === 'a' ||
           word === 'an' ||
           word === 'but' || 
           word === 'of' || 
           word === 'and' ||
           word === 'for' || 
           word === 'at' ||
           word === 'by' ||
           word === 'from') {
             return word
           }
        else {
          return Formatter.capitalize(word)
        }
    })
  return answer.join(' ')
  }
}