class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      } else {
        if (!exceptions.includes(words[i])) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
      }
    }

    return words.join(' ');
  }
}