import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
import ProductPhotoImg from "./ProductPhotoImg";
import ProductDec from "./ProductDec";
import Loading from "./Loading";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f4a32c8105msh6e6809ba17f74a9p150a68jsn46c52487869c",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};
const ProductDetails = () => {
  const { tcin } = useParams();
  const PdtDetailsUrl = `https://target1.p.rapidapi.com/products/v3/get-details?tcin=${tcin}&store_id=911`;
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //// Fetch product details using the tcin value and render the component
  useEffect(() => {
    const fetchingFn = async () => {
      try {
        if (tcin) {
          setIsLoading(true);
          const response = await fetch(PdtDetailsUrl, options);
          const dataSet = await response.json();
          const result = dataSet.data.product;
          console.log(result);
          const extractedProducts = {
            tcin: result.tcin,
            title: result.item.product_description.title,
            desc: result.item.product_description.downstream_description,
            price: result.price.formatted_current_price,
            bulletDesc: result.item.product_description.bullet_descriptions,
            softBulletDesc: result.item.product_description.bullets,
            mainImage: result.item.enrichment.images.primary_image_url,
            altImage: result.item.enrichment.images.alternate_image_urls,
            labelImage: result.item.enrichment.images.content_labels,
            //videos
            pdtVendor: result.item.product_vendors[0].vendor_name,
            //pakage dimension
            //return policy
            //other prices
          };

          setDetails(extractedProducts);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, [tcin]);

  return (
    <div className="ProductDetails">
      <div className="PD_Top">
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <ProductPhotoImg
              mainImg={details.mainImage}
              altimg={details.altImage}
            />
            <ProductDec price={details.price} title={details.title} />
          </>
        )}
      </div>
      {/*       <div className="altImage">
        {details.altImage && details.altImage.length > 0
          ? details.altImage.map((imgItem, index) => (
              <img src={imgItem} alt="imgItem" key={index} />
            ))
          : console.log("no altImage available")}
      </div> */}
      tcin: {tcin}
    </div>
  );
};
export default ProductDetails;
