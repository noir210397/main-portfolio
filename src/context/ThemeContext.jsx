import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [primaryColor, setPrimaryColor] = useState("blue");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    let color = localStorage.getItem("color");
    let bg = localStorage.getItem("background");
    if (color) {
      setPrimaryColor(color);
    }
    if (bg) {
      setTheme(bg);
    }
    setisLoading(true);
  }, []);
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, primaryColor, setPrimaryColor, isLoading }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
