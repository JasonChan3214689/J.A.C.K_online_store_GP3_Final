import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
import ProductPhotoImg from "./ProductPhotoImg";
import ProductDec from "./ProductDec";
import Loading from "./Loading";
import ItemVideo from "./ItemVideo";
import ItemAccordion from "./ItemAccordion";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "19ed09e4c0msh06e34c0f07b6070p167f93jsn81a0b8b13e2f",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};
const ProductDetails = ({ shoppingCartItem, onShoppingCartitem }) => {
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
          console.log(dataSet);
          const result = dataSet.data.product;
          console.log(result);
          const preExtractedProducts = {
            tcin: result.tcin,
            title: result.item.product_description.title,
            desc: result.item.product_description.downstream_description,
            price: result.price.formatted_current_price,
            bulletDesc: result.item.product_description.bullet_descriptions,
            softBulletDesc:
              result.item.product_description?.soft_bullets?.bullets,
            mainImage: result.item.enrichment.images.primary_image_url,
            altImage: result.item.enrichment.images.alternate_image_urls,
            labelImage: result.item.enrichment.images.content_labels,
            video:
              result.item.enrichment.videos?.[0]?.video_files?.[0]?.video_url,
            packaging: result.item.package_dimensions,
            pdtVendor: result.item.product_vendors?.[0]?.vendor_name,
            //pakage dimension
            //return policy
            //other prices
          };
          const extractedProducts = Object.entries(preExtractedProducts).reduce(
            (filtered, [key, value]) => {
              if (value) {
                filtered[key] = value;
              }
              return filtered;
            },
            {}
          );

          setDetails(extractedProducts);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);

  return (
    <div className="ProductDetails">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="PD_Top">
            <ProductPhotoImg
              mainImg={details.mainImage}
              altimg={details.altImage}
            />
            <ProductDec
              price={details.price}
              title={details.title}
              onShoppingCartitem={onShoppingCartitem}
            />
          </div>
          <div className="PD_Bottom">
            <div className="aboutThisItem">About This Item</div>

            {details.video && (
              <div className="ItemVideo">
                <ItemVideo video={details.video} />
              </div>
            )}

            <div className="Accordion">
              <ItemAccordion
                itemDesc={details.desc || null}
                bulletDesc={details.bulletDesc || null}
                softBulletDesc={details.softBulletDesc || null}
                packaging={details.packaging ? details.packaging : null}
              />
            </div>
          </div>
        </>
      )}
      {/*       <div className="altImage">
        {details.altImage && details.altImage.length > 0
          ? details.altImage.map((imgItem, index) => (
              <img src={imgItem} alt="imgItem" key={index} />
            ))
          : console.log("no altImage available")}
      </div> */}
      {console.log(tcin)}
    </div>
  );
};
export default ProductDetails;
