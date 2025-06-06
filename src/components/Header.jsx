import "./Header.css";

const Header = ({ score, bestScore }) => {
  return (
    <>
      <header>
        <h1>El Chavo Memory Card</h1>
        <div className="score">
          <p>Score: {score}</p>
          <p>Best: {bestScore}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
