import { useState } from "react";

export const useClickButton = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(true);
  };

  return { value, handleClick };
};
