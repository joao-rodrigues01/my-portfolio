import { useEffect, useState } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkIsMobile() {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    }

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return { isMobile };
}
