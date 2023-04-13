import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function useDarkMode() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.modal.appearance);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    dispatch({ type: "setAppearance" });
  }

  useEffect(() => {
    if (mode === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [mode]);

  return [theme, toggleTheme]
}
