"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value)
  };

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];


  return (
    <div>
      <div>
        <div>The current theme is: {theme}</div>
      </div>
      <div>
      <select className="select select-bordered w-full max-w-xs" value={theme} onChange={handleThemeChange}>
        {
          themes.map((item) => (
            <option value={item}>{item}</option>
          ))
        }
      </select>
      </div>
    </div>
  );
};

export default ThemeSwitch;