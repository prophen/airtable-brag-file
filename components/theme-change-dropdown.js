import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeChangeDropdown() {
  useEffect(() => {
    themeChange(false);
  }, []);

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
  ];
  return (
    <div className="flex justify-end">
      <div title="Change Theme" className="dropdown dropdown end p-8">
        <div tabIndex="0" className="m-1 btn">
          <span>Change Theme</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            className="inline-block w-4 h-4 ml-1 fill-current"
          >
            <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          {themes.map((theme, index) => (
            <li key={index}>
              <a tabIndex="0" data-set-theme={theme} className="">
                {theme}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
