import { useState } from "react";
import Input from "./Input";

export default function Brandfilter({ handleChange }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="accordion"
      >
        Brand
      </button>
      {open && (
        <>
          <Input
            handleChange={handleChange}
            value="Nintendo"
            title="Nintendo"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value="PlayStation"
            title="PlayStation"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value="Xbox"
            title="Xbox"
            name="brand"
          />
        </>
      )}
    </>
  );
}
