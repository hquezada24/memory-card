import "./Card.css";

const Card = ({ children }) => {
  return (
    <>
      <div className="card">
        <div className="image">{children}</div>
      </div>
    </>
  );
};

export default Card;
