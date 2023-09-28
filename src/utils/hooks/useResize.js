import { useState, useEffect } from "react";
import { SCREEN_480, SCREEN_768, SCREEN_1280 } from "../constants";

export const useResize = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREEN_480);

  useEffect(() => {
    const handleResize = (event) => {
      const newWidth = event.target.innerWidth;

      if (newWidth >= SCREEN_1280) {
        setCurrentScreen(SCREEN_1280);
      } else if (newWidth >= SCREEN_768) {
        setCurrentScreen(SCREEN_768);
      } else {
        setCurrentScreen(SCREEN_480);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [currentScreen];
};
