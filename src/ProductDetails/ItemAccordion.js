import { Interweave } from "interweave";
import "./ItemAccordion.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Collapsible from "react-collapsible";
import { useState, useEffect } from "react";

const ItemAccordion = ({ itemDesc, bulletDesc, softBulletDesc, packaging }) => {
  const replacePhrase = "Target";
  const replacement = "J.A.C.K Online Store";
  const [bulletListString, setBulletListString] = useState("");
  const [softBulletListString, setSoftBulletListString] = useState("");
  const [packagingString, setPackagingString] = useState("");

  useEffect(() => {
    const bulletString = bulletDesc
      ? bulletDesc
          .map((itemBullet, index) => `<li key=${index}>${itemBullet}</li>`)
          .join("<br>")
          .replace(new RegExp(replacePhrase, "g"), replacement)
      : "";

    const softBulletString = softBulletDesc
      ? softBulletDesc
          .map((itemBullet, index) => `<li key=${index}>${itemBullet}</li>`)
          .join("<br>")
          .replace(new RegExp(replacePhrase, "g"), replacement)
      : "";

    const packagingString = packaging
      ? Object.entries(packaging)
          .map(([itemKey, value], index) => {
            const capitalizedKey =
              itemKey.charAt(0).toUpperCase() + itemKey.slice(1);

            return `<li key=${index}><b>${capitalizedKey}: </b>${value}</li>`;
          })
          .join("<br>")
          .replace(new RegExp(replacePhrase, "g"), replacement)
      : "";

    setBulletListString(bulletString);
    setSoftBulletListString(softBulletString);
    setPackagingString(packagingString);
  }, [bulletDesc, softBulletDesc, packaging]);

  return (
    <>
      {console.log(packagingString)}
      {console.log(softBulletDesc)}
      <Collapsible trigger="Details">
        <Interweave content={itemDesc} />
      </Collapsible>
      <Collapsible trigger="Product Specifications">
        <Interweave content={bulletListString} />
        <br />
        <br />
        <Interweave content={softBulletListString} />
      </Collapsible>
      <Collapsible trigger="Packaging">
        <Interweave content={packagingString} />
      </Collapsible>
    </>
  );
};

export default ItemAccordion;
