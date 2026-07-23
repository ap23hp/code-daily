function panic(sentence) {
  if (sentence.includes(" ")) {
    return sentence.toUpperCase().split(" ").join(" 😱 ") + "!";
  }
  return sentence.toUpperCase() + "!";
}
