import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top-button ${showButton ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      <img src="./up-arrow.png" alt="back-to-top" style={{ width: "45px" }} />
    </button>
  );
}

export default ScrollToTopButton;
