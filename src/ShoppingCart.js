import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ShoppingCart({ shoppingCartItem }) {
  const [mobileIconSrc, setMobileIconSrc] = useState("/購物車ICON_Mobile.png");
  const [desktopIconSrc, setDesktopIconSrc] = useState("/購物車ICON.png");
  const [mobileIconSrcFilled, setMobileIconSrcFilled] = useState(
    "/購物車ICON_Mobile_H.png"
  );
  const [desktopIconSrcFilled, setDesktopIconSrcFilled] =
    useState("/購物車ICON_H.png");
  const [iconSrc, setIconSrc] = useState(
    window.innerWidth <= 920 ? mobileIconSrc : desktopIconSrc
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);
  useEffect(() => {
    const updateIconAndCheckMobile = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 920);
      if (windowWidth <= 920) {
        setIconSrc(
          shoppingCartItem.length === 0 ? mobileIconSrc : mobileIconSrcFilled
        );
      } else {
        setIconSrc(
          shoppingCartItem.length === 0 ? desktopIconSrc : desktopIconSrcFilled
        );
      }
    };
    window.addEventListener("resize", updateIconAndCheckMobile);
    updateIconAndCheckMobile();
    return () => {
      window.removeEventListener("resize", updateIconAndCheckMobile);
    };
  }, [
    shoppingCartItem.length,
    mobileIconSrc,
    desktopIconSrc,
    mobileIconSrcFilled,
    desktopIconSrcFilled,
  ]);
  const navigate = useNavigate();
  const handleOpenShoppingCart = () => {
    navigate("/shopping-cart");
  };
  return (
    <div className="CartContainer" onClick={handleOpenShoppingCart}>
      <img src={iconSrc} alt="購物車" />
      {shoppingCartItem.length !== 0 && !isMobile && (
        <span>{shoppingCartItem.length} product</span>
      )}
    </div>
  );
}
