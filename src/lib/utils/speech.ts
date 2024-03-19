const speechUtterance = (text: string) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  window.speechSynthesis.speak(speech);
};

export default speechUtterance;
