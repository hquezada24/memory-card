import "./Card.css";

const Card = ({ children, onClick }) => {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="image">{children}</div>
      </div>
    </>
  );
};

export default Card;
