import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TopBanner({ deviceType }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="TopBannerContainer">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="topBannerPhoto">
          <img src="/TopBanner/jackSquad_4.jpg" alt="jackSquad" />
        </div>
        <div className="topBannerPhoto">
          <img src="/TopBanner/smparty.jpg" alt="superMario" />
        </div>
        <div className="topBannerPhoto">
          <img src="/TopBanner/zelda.jpg" alt="zelda" />
        </div>
        <div className="topBannerPhoto">
          <img src="/TopBanner/FC24.jpg" alt="FC24" />
        </div>
        <div className="topBannerPhoto">
          <img src="/TopBanner/hogwart.jpg" alt="hogwarts" />
        </div>
      </Carousel>
    </div>
  );
}
