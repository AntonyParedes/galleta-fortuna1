const BtnCookie = ({ setShowCookie, setAnimate }) => {
  const changeCookie = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
    setTimeout(() => setShowCookie(false), 1000);
  };
  return (
    <button
      className="hover:scale-125 transition-transform cursor-pointer max-w-[400px] bg-emerald-500 p-6 rounded-3xl shadow-2xl py-2 px-4 block  ml-auto text-white tiny5-regular absolute top-56 left-6"
      onClick={changeCookie}>
      Abrir Galleta
    </button>
  );
};

export default BtnCookie;
