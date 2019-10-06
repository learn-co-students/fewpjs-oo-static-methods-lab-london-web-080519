class Formatter {
  //add static methods here

  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1) 
  }

  static sanitize (string){
    return string.replace(/[$@#!*^{()}]+/g, '');
  }

  static titleize (string){
    let notCapped = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    let stringArray = string.split(" ")
    
    let stringArrayProperCase = stringArray.map(word => {
      if (notCapped.includes(word)) {
        return word.toLowerCase();
      } else {
        return this.capitalize(word);
      }
    });
    return this.capitalize(stringArrayProperCase.join(' '))
  }
  
}