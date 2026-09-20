// Scrolls to the top after the current route changes.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
