import { useState } from "react";
import Input from "./Input";

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
          <Input
            handleChange={handleChange}
            value="Consoles"
            title="Consoles"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value="Games"
            title="Games"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value="Accessories"
            title="Accessories"
            name="brand"
          />
        </>
      )}
    </>
  );
}
