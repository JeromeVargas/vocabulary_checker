import { TARGET_LANGUAGE, UTTERANCE_SPEED } from "../../config/constants";

const speechUtterance = (text: string) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = TARGET_LANGUAGE;
  speech.rate = UTTERANCE_SPEED;
  window.speechSynthesis.speak(speech);
};

export default speechUtterance;
