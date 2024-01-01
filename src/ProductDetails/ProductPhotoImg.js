import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetails.css";

function MyGalleryComponent({ mainImg, altimg }) {
  const images = [];

  if (mainImg) {
    images.push({
      original: mainImg,
      thumbnail: mainImg,
    });
  }

  if (altimg && altimg.length > 0) {
    altimg.forEach((imgUrl) => {
      images.push({
        original: imgUrl,
        thumbnail: imgUrl,
      });
    });
  }

  const renderThumbInner = (item) => {
    return (
      <div className="image-gallery-thumbnail-inner">
        <img
          src={item.thumbnail}
          alt={item.original}
          className="custom-thumbnail"
        />

        {item.description && (
          <div className="image-gallery-thumbnail-label">
            {item.description}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="gallery-container">
        {images.length > 0 ? (
          <ImageGallery items={images} renderThumbInner={renderThumbInner} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MyGalleryComponent;
