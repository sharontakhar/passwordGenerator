const Verfiyer = () => {
  return (
    <div>
      <p>Strength : </p>
      <div className="strong" id="meter">
        <p>Strong</p>
      </div>
      <div className="medium" id="meter">
        <p>Medium</p>
      </div>
      <div className="weak" id="meter">
        {" "}
        <p>Weak</p>
      </div>
    </div>
  );
};
export default Verfiyer;
