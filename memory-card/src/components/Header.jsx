import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>Memory game</h1>
        <div className="score">
          <p>Score: </p>
          <p>Best: </p>
        </div>
      </header>
    </>
  );
};

export default Header;
