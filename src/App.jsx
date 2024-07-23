import { useState } from "react";
import "./App.css";
import quotes from "./data/phrases.json";
import getRandomNumbers from "./utils/getRandomNumbers";
import Phrase from "./components/Phrase";
import BtnPhrase from "./components/BtnPhrase";
import photos from "./data/photos.json";
import "./index.css";
import Cookie from "./components/Cookie";
import BtnCookie from "./components/BtnCookie";

function App() {
  const indexRandom = getRandomNumbers(quotes.length);
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
  const [bgSelected, setBgSelected] = useState(
    photos[getRandomNumbers(photos.length)]
  );
  // animation
  const [showCookie, setShowCookie] = useState(true);
  const [animate, setAnimate] = useState(false);

  const objStyles = {
    backgroundImage: `url(/img/fondo${bgSelected}.jpg) `,
  };

  return (
    <div
      style={objStyles}
      className="min-h-screen bg-cover bg-center flex justify-center items-center px-4">
      <h1 className="absolute  top-36 text-5xl uppercase  text-center drop-shadow-lg stroke text-white bungee-regular shadow-gray-950 tiny5-regular">
        Galleta de la
        <br />
        fortuna
      </h1>

      <article className="max-w-[400px] p-7 text-center absolute">
        {/* renderizado */}

        {showCookie ? (
          <Cookie showCookie={showCookie} animate={animate} />
        ) : (
          <Phrase phraseSelected={phraseSelected} />
        )}

        {showCookie ? (
          <BtnCookie setShowCookie={setShowCookie} setAnimate={setAnimate} />
        ) : (
          <BtnPhrase
            setPhraseSelected={setPhraseSelected}
            setBgSelected={setBgSelected}
            setShowCookie={setShowCookie}
          />
        )}
      </article>

      <img src="/img/rectangle1.svg" alt="Image " />

      <footer className=" absolute bottom-40 text-white ">
        <p className="font-semibold bg-orange-500/80  rounded-md text-center font-mono ">
          Autor:
        </p>
        <p className=" text-gray-700 bg-white/80 rounded-md p-2">
          {phraseSelected.author}
        </p>
      </footer>
    </div>
  );
}

export default App;
