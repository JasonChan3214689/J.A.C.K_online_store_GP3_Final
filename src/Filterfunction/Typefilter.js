import { useState } from "react";
//import Input from "./Input";
import Input2 from "./Input2";

export default function Typefilter({ handleChange }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="accordion"
      >
        Type
      </button>
      {open && (
        <>
          <Input2
            handleChange={handleChange}
            value="Console"
            title="Consoles"
            name="cat"
          />
          <Input2
            handleChange={handleChange}
            value="Video Games"
            title="Video Games"
            name="cat"
          />
          <Input2
            handleChange={handleChange}
            value="Accessories"
            title="Accessories"
            name="cat"
          />
        </>
      )}
    </>
  );
}
