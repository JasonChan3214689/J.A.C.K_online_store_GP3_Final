const Input = ({ handleChange, value, title }) => {
  return (
    <>
      <label className="contain">
        <input
          onChange={handleChange}
          type="radio"
          value={value}
          name="brand"
        />
        <span className="checkmark"></span>
        {title}
      </label>
    </>
  );
};

export default Input;
