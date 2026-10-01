import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 20,
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
