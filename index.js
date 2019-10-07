class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let regex = /[\d"\(\)<>\/\\`~!\?@#$\*\^\{\}]/g
    return string.replace(regex, '')
  }

  static titleize(sentence) {
     let words = sentence.split(' ')
     let regex = /^a$|^an$|^but$|^of$|^and$|^for$|^at$|^by$|^from$|^the$/
     return words.map((word, index) => {
       if (index === 0 || !regex.test(word)) {
         return this.capitalize(word)
       } else {
         return word
       }
     }).join(' ')
  }
}