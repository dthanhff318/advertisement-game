import { useEffect } from "react";

type TProps = {
  target: string;
  callback: () => void;
};
const useClickOutside = ({ target, callback }: TProps) => {
  const handleClick = (e: MouseEvent) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    if (!!(e.target as HTMLElement)?.closest(target)) {
      return;
    } else {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [target]);
};

export default useClickOutside;
