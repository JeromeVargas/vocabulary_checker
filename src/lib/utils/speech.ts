const speechUtterance = (text: string) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = "en-US";
  speech.rate = 0.7;
  window.speechSynthesis.speak(speech);
};

export default speechUtterance;
