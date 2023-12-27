import ImageGallery from "react-image-gallery";
import "./TopBanner.css";
export default function TopBanner() {
  const images = [
    {
      original: "../superMario_1600w",
      thumbnail: "../superMario_1600w",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="TopBannerContainer">
      <ImageGallery items={images} />
    </div>
  );

  // return (
  //   <div className="TopBannerContainer">
  //     <img src="./TOPBANNER.png" alt="TopBanner"></img>
  //   </div>
  // );
}
