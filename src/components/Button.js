const Button = ({ title, handleClick }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
