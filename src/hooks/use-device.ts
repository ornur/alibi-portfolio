import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "desktop" | "mediumDesktop";

export function useDevice() {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    const getDeviceType = (): DeviceType => {
      const width = window.innerWidth;

      if (width < 767) {
        return "mobile";
      } else if (width >= 768 && width < 1011) {
        return "tablet";
      } else if (width >= 1011 && width < 1441) {
        return "mediumDesktop";
      } else {
        return "desktop";
      }
    };

    const handleResize = () => {
      setDevice(getDeviceType());
    };

    // Set initial device type
    setDevice(getDeviceType());

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}
