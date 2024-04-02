const speechUtterance = (text: string) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = "ja-JP";
  speech.rate = 0.9;
  window.speechSynthesis.speak(speech);
};

export default speechUtterance;
