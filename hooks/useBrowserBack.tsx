import { useState, useEffect, useCallback } from "react";

/** ブラウザバック時の表示のステートをトグルするカスタムフック */
export const useBrowserBack = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  useEffect(() => {
    // ブラウザバック時に表示トグルする
    if (!isVisible) {
      history.pushState(null, "", location.pathname + location.search);
      window.onpopstate = () => {
        toggleVisibility();
      };
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      window.onpopstate = () => {};
    }
  }, [isVisible, toggleVisibility]);

  return { isVisible, toggleVisibility };
};
