import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useDarkMode() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.general.appearance);
  const [theme, setTheme] = useState("");

  function toggleTheme() {
    dispatch({ type: "setAppearance" });
  }

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem("mode"));
    if (storedMode) {
      dispatch({ type: "setAppearance", payload: storedMode });
    }
  }, [dispatch]);

  useEffect(() => {
    if (mode === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  return [theme, toggleTheme];
}

// localStorage.setItem("theme", JSON.stringify(mode));
