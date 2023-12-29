import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e2b0514502msh93b0511af19445ep1fe412jsn5bcb00a782cc",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};
const ProductDetails = () => {
  const { tcin } = useParams();
  const PdtDetailsUrl = `https://target1.p.rapidapi.com/products/v3/get-details?tcin=${tcin}&store_id=911`;
  const [details, setDetails] = useState({});

  //// Fetch product details using the tcin value and render the component
  useEffect(() => {
    const fetchingFn = async () => {
      try {
        if (tcin) {
          const response = await fetch(PdtDetailsUrl, options);
          const dataSet = await response.json();
          const result = dataSet.data.product;
          console.log(result);
          const extractedProducts = {
            tcin: result.tcin,
            title: result.item.product_description.title,
            desc: result.item.product_description.downstream_description,
            bulletDesc: result.item.product_description.bullet_descriptions,
            softBulletDesc: result.item.product_description.bullets,
            mainImage: result.item.enrichment.images.primary_image_url,
            altImage: result.item.enrichment.images.alternate_image_urls,
            labelImage: result.item.enrichment.images.content_labels,
            //videos
            pdtVendor: result.item.product_vendors[0].vendor_name,
            //pakage dimension
            //return policy
            price: result.price.current_retail,
            //other prices
          };

          setDetails(extractedProducts);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, [tcin]);

  return (
    <div className="ProductDetails">
      <h2>{details.title}</h2>
      <div className="PD_Top">
        <img src={details.mainImage} alt="mainImg" />
        <h6>{details.desc}</h6>
      </div>
      <div className="altImage">
        {details.altImage && details.altImage.length > 0
          ? details.altImage.map((imgItem, index) => (
              <img src={imgItem} alt="imgItem" key={index} />
            ))
          : console.log("no altImage available")}
      </div>
      tcin: {tcin}
    </div>
  );
};
export default ProductDetails;
