const Phrase = ({ phraseSelected }) => {
  return (
    <p className="font-mono mb-2  text-gray-700">{phraseSelected.phrase}</p>
  );
};

export default Phrase;
