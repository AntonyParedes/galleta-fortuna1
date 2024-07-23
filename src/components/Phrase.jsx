const Phrase = ({ phraseSelected }) => {
  return (
    <p className="font-mono mb-6  text-gray-700 ab relative">
      {phraseSelected.phrase}
    </p>
  );
};

export default Phrase;
