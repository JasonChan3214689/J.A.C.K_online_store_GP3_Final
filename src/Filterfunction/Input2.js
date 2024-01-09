const Input2 = ({ handleChange, value, title }) => {
  return (
    <>
      <label className="contain">
        <input onChange={handleChange} type="radio" value={value} name="cat" />
        <span className="checkmark"></span>
        {title}
      </label>
    </>
  );
};

export default Input2;
