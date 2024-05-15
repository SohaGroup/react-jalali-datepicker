import React, { useContext } from "react";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";

/**
 * Subscribes to the ConfigProvider locale changes and updates the dayjs calendar based on current locale.
 */
export const useJalaliLocaleListener = () => {
  const { locale } = useContext(ConfigProvider.ConfigContext);
  React.useEffect(() => {
    if (locale?.locale == "fa") {
      // @ts-ignore
      dayjs["calendar"]?.("jalali");
    } else {
      // @ts-ignore
      dayjs["calendar"]?.("gregorian");
    }
  }, [locale]);
};
