import { TARGET_LANGUAGE } from "../../config/constants";

const speechUtterance = (text: string) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = TARGET_LANGUAGE;
  speech.rate = 0.7;
  window.speechSynthesis.speak(speech);
};

export default speechUtterance;
