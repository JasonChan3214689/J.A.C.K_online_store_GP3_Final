import { Interweave } from "interweave";
import { motion } from "framer-motion";

import "./ProductDetails.css";
const ProductDetailsDesc = ({ detailsDesc }) => {
  if (!detailsDesc) {
    return null;
  }
  const formattedDesc =
    detailsDesc &&
    detailsDesc
      .replaceAll(/<br \/> <br \/>/g, "<br /><br />")
      .replaceAll(/<br\s*\/?>\s*<br\s*\/?>/g, "<br /><br />")
      .split("<br /><br />");
  console.log(
    "hi",

    detailsDesc
      .replaceAll(/<br \/> <br \/>/g, "<br /><br />")
      .replaceAll(/<br\s*\/?>\s*<br\s*\/?>/g, "<br /><br />")
      .split("<br /><br />")
  );
  console.log(
    "details",
    detailsDesc
      .replaceAll(/<br \/> <br \/>/g, "<br /><br />")
      .replaceAll(/<br\s*\/?>\s*<br\s*\/?>/g, "<br /><br />")
      .split("<br /><br />")
  );
  console.log(detailsDesc);

  const descFirstPara = formattedDesc[0] + "<br />" + formattedDesc[1];

  const descSecondPara = formattedDesc.slice(2, 4).join("<br />");
  const descThirdPara = formattedDesc.slice(5).join("<br />");
  return (
    <>
      {descFirstPara && (
        <motion.div
          className="descS1"
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <img src="/descS1Photo.jpg" alt="descS1Photo" />

            <img
              src="/descS1Behind.png"
              alt="descS1Behind"
              className="descS1Behind"
            />
          </div>
          <div className="descStext">
            <Interweave content={descFirstPara} />
          </div>
        </motion.div>
      )}
      {descSecondPara && (
        <motion.div
          className="descS2"
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="descStext">
            <Interweave content={descSecondPara} />
          </div>
          <div>
            <motion.img
              src="/mario.png"
              alt="descS2Photo"
              className="png1"
              initial={{ x: 20, opacity: 1, y: 20 }}
              animate={{
                x: [20, 40, 60, 80, 100],
                opacity: 1,
                y: [40, 20, 40, 20, 40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      )}

      {descThirdPara && (
        <motion.div
          className="descS3"
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background video 2 */}

          <video className="background-video2" autoPlay loop muted>
            <source src={"/pdtDescBackground4.mp4"} type="video/mp4" />
          </video>

          <div>
            <img src="/descS3Photo_v3.jpg" alt="descS1Photo" />
          </div>
          <div className="descStext">
            <Interweave content={descThirdPara} />
          </div>
        </motion.div>
      )}
    </>
  );
};
export default ProductDetailsDesc;
