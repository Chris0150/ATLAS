import { useState } from "react";

 const useToggleState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};

export default useToggleState;