import { useEffect, useState } from "react";

export const DESKTOP_WIDTH = 1440;
export const MINI_DESKTOP_WIDTH = 1280;
export const TABLET_WIDTH = 1024;
export const SMALL_TABLET_WIDTH = 820;
export const MOBILE_WIDTH = 600;
export const MINI_MOBILE_WIDTH = 320;
export const isClient = typeof window === "object";

export const mediaQueryDesktop = `@media only screen and (max-width: ${DESKTOP_WIDTH}px)`;
export const mediaQueryMiniDesktop = `@media only screen and (max-width: ${MINI_DESKTOP_WIDTH}px)`;
export const mediaQueryTablet = `@media only screen and (max-width: ${TABLET_WIDTH}px)`;
export const mediaQuerySmallTablet = `@media only screen and (max-width: ${SMALL_TABLET_WIDTH}px)`;
export const mediaQueryMobile = `@media only screen and (max-width: ${MOBILE_WIDTH}px)`;
export const mediaQueryMiniMobile = `@media only screen and (max-width: ${MINI_MOBILE_WIDTH}px)`;

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  return {
    isDesktop: width <= DESKTOP_WIDTH,
    isMiniDesktop: width <= MINI_DESKTOP_WIDTH,
    isTablet: width <= TABLET_WIDTH,
    isSmallTablet: width <= SMALL_TABLET_WIDTH,
    isMobile: Math.min(width, height) <= MOBILE_WIDTH,
    isLandscape: width > height,
    isPortrait: height > width,
  };
};
