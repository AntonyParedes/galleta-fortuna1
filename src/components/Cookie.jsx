const Cookie = ({ animate }) => {
  return (
    <div
      className="py-7 px-14 flex justify-center"
      style={{ marginLeft: "55px" }}>
      <div className={animate ? "translate-to-left" : ""}>
        <img className="min-w-60" src="/img/galleta-iz.png" alt="galleta de" />
      </div>
      <div className={animate ? "translate-to-right" : ""}>
        <img className="min-w-60" src="/img/galleta-der.png" alt="galleta de" />
      </div>
    </div>
  );
};

export default Cookie;
