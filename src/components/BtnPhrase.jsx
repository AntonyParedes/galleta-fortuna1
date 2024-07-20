import getRandomNumbers from "../utils/getRandomNumbers";
import quotes from "../data/phrases.json";
import photos from "../data/photos.json";

const BtnPhrase = ({ setPhraseSelected, setBgSelected }) => {
  const changePhrase = () => {
    const indexRandom = getRandomNumbers(quotes.length);
    const phraseRandom = quotes[indexRandom];
    setPhraseSelected(phraseRandom);
    setBgSelected(photos[getRandomNumbers(photos.length)]);
  };
  return (
    <button
      className="hover:scale-125 transition-transform cursor-pointer max-w-[400px] bg-emerald-500 p-6 rounded-xl shadow-2xl py-2 px-4 block ml-auto text-white  absolute tiny5-regular"
      onClick={changePhrase}>
      Abrir otra
    </button>
  );
};

export default BtnPhrase;