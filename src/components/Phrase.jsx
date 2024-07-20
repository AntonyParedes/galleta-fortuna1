const Phrase = ({ phraseSelected }) => {
  return (
    <p className="text-center font-mono mb-6  text-gray-700">
      {phraseSelected.phrase}
    </p>
  );
};

export default Phrase;
