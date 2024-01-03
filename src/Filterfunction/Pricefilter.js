import Input from "./Input";
import { useState } from "react";

export default function Pricefilter({ handleChange }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="accordion"
      >
        Price
      </button>
      {open && (
        <>
          <Input
            handleChange={handleChange}
            value="sale"
            title="sale"
            name="brand"
          />
          {/* <Input
            handleChange={handleChange}
            value={15}
            title="less than $15"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value={25}
            title="less than $25"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value={50}
            title="less than $50"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value={100}
            title="less than $100"
            name="brand"
          />
          <Input
            handleChange={handleChange}
            value={101}
            title="above $100"
            name="brand"
          /> */}
        </>
      )}
    </>
  );
}
