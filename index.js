class Formatter {
  //add static methods here
  static capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  static sanitize(sentence) {
    return sentence.replace(/[$@#!*({^]/g, "");
  }

  static titleize(sentence) {
    let ignore = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    let sentenceArray = sentence.split(" ");
    let capitalizedSentence = sentenceArray.map(a => {
      if (ignore.includes(a)) {
        return a.toLowerCase()
      } else {
        return this.capitalize(a);
      }
    });
    return this.capitalize(capitalizedSentence.join(" "));
  }
}
