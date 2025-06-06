import "./Header.css";

const Header = ({ score }) => {
  return (
    <>
      <header>
        <h1>El Chavo Memory Card</h1>
        <div className="score">
          <p>Score: {score}</p>
          <p>Best: </p>
        </div>
      </header>
    </>
  );
};

export default Header;
