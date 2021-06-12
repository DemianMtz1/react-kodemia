import React, { useEffect, useState } from "react";
import "./appThemeToggle.css";

function AppThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  return <div className={`appThemeTogge ${theme}`} onClick={toggle} />;
}
export default AppThemeToggle;
